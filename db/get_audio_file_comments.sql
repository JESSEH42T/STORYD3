SELECT *
FROM comments 
JOIN audio_files ON audio_files.audio_file_id = comments.audio_file_id
WHERE audio_files.audio_file_id = $1;