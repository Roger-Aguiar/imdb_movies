CREATE DATABASE imdb_movies;
USE imdb_movies;

DESCRIBE actor;

-- Script to insert data into actor table
INSERT INTO actor(actor, born, country, imdb_link, as_actor, as_producer, as_director)
VALUES('Denzel Washington', 
       'December 28, 1954', 
       'USA', 
       'https://www.imdb.com/name/nm0000243/?ref_=nv_sr_srsg_0',
		61, 13, 5);
        
SELECT * FROM actor;

-- ******************************************************************************************
-- Scripts for genre table
INSERT INTO genre(genre)
VALUE('Action'), ('Adventure'), ('Comedy'), ('Crime and mistery'),
      ('Fantasy'), ('Historical'), ('Horror'), ('Romance'),
      ('Satire'), ('Science fiction'), ('Speculative'), ('Thriller'), 
      ('Western'), ('Drama'), ('Martial arts');
      
SELECT * FROM genre;

DELETE FROM genre;

SELECT * FROM movie;