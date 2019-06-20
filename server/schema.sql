CREATE DATABASE chat;

USE chat;

CREATE TABLE IF NOT EXISTS messages (
  /* Describe your table here.*/
  id int auto_increment primary key,
  roomname varchar(40),
  username varchar(20),
  txt varchar(50),
  createdAt timestamp
  
);

/* Create other tables and define schemas for them here! */
CREATE TABLE IF NOT EXISTS friends (
  id int auto_increment primary key,
  username varchar(20),
  friends varchar(20)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

