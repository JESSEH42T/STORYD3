UPDATE comments 
    SET user_comment = $1
    WHERE comment_id = $2;