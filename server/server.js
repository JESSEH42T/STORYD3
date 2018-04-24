const express = require("express"),
  bodyParser = require("body-parser"),
  massive = require("massive"),
  session = require("express-session"),
  cors = require("cors"),
  passport = require("passport"),
  Auth0Strategy = require("passport-auth0");

require("dotenv").config();
const S3 = require("./s3");
const path = require("path");
const {
  SERVER_PORT,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
  REACT_APP_LOGIN,
  REACT_APP_LOGOUT,
  SUCCESS_REDIRECT,
  FAILURE_REDIRECT,
  CONNECTION_STRING
} = process.env;

const app = express();

app.use( express.static( `${__dirname}./../build` ) );
app.use(cors());
app.use(bodyParser.json({ limit: "60MB" }));
S3(app);
// app.get('*', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../build/index.html'));
// });

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    console.log("Database Connection Established");
  })
  .catch(err => console.log(err));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: "openid profile email "
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      db.find_user([profile.id]).then(userResult => {
        if (!userResult[0]) {
          db
            .create_user([profile.displayName, profile.id, profile.picture])
            .then(createdUser => {
              return done(null, createdUser[0].id);
            })
            .catch(err => console.log(err));
        } else {
          return done(null, userResult[0].id);
        }
      });
    }
  )
);
passport.serializeUser((id, done) => {
  done(null, id);
});
passport.deserializeUser((id, done) => {
  app
    .get("db")
    .find_session_user([id])
    .then(loggedInUser => {
      done(null, loggedInUser[0]);
    })
    .catch(err => console.log(err));
});
app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: SUCCESS_REDIRECT,
    failureRedirect: FAILURE_REDIRECT
  })
);

app.get("/auth/me", function(req, res) {
  if (!req.user) {
    res.sendStatus(401);
  } else {
    res.status(200).send(req.user);
  }
});
app.get("/auth/logout", (req, res) => {
  req.logOut();
  res.redirect(process.env.FAILURE_REDIRECT);
});

app.get("/api/get_audio_files", (req, res) => {
  app
    .get("db")
    .get_audio_files()
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.post("/api/create_audio_file", (req, res) => {
  app
    .get("db")
    .create_audio_file([req.body.audio_file_url])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});
app.get("/api/get_all_comments", (req, res) => {
  app
    .get("db")
    .get_all_comments()
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.post("/api/create_comment", (req, res) => {
  app
    .get("db")
    .create_comment([
      req.body.user_comment,
      req.session.passport.user
    ])
    .then(response => { console.log(response)
      res.status(200).send(response)})
    .catch(err => console.log(err));
});
app.put("/api/edit_comment", (req, res) => {
  app
    .get("db")
    .edit_comment([req.body.user_comment, req.body.comment_id])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});
app.delete("/api/delete_comment/:id", (req, res) => {
  app
    .get("db")
    .delete_comment([req.params.id])
    .then(response => res.status(200).send(response))
    .catch(err => console.log(err));
});

app.listen(SERVER_PORT, () => console.log(`listening on port: ${SERVER_PORT}`));
