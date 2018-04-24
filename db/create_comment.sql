INSERT INTO comments
    ( user_comment, id )
VALUES
    ($1, $2);
select * from comments where id = $2;
-- INSERT INTO comments
--     ( user_comment, id, audio_file_id )
-- VALUES
--     ('its working', 1, 1);
--     select * from comments where id = 1