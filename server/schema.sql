CREATE DATABASE chat;

USE chat;

-- SET foreign_key_checks = 0;
CREATE TABLE IF NOT EXISTS rooms (
  /* Describe your table here.*/
  id int auto_increment primary key,
  roomname varchar(15)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS users (
  /* Describe your table here.*/
  id int auto_increment primary key,
  username varchar(20)
) engine = InnoDB;

CREATE TABLE IF NOT EXISTS messages (
  /* Describe your table here.*/
  id int auto_increment primary key,
  userId int(15),
  roomId int(15),
  txt varchar(50),
  createdAt timestamp,
  foreign key (userId) references users(id),
  foreign key (roomId) references rooms(id)
) engine = InnoDB;


-- CREATE TABLE IF NOT EXISTS messages (
--   /* Describe your table here.*/
--   id int auto_increment primary key,
--   username varchar(20),
--   roomname varchar(40),
--   txt varchar(50),
--   createdAt timestamp
-- ) engine = InnoDB;

insert into rooms (roomname) values ('lobby');
insert into users (username) values ('adel');

insert into messages (txt, userId, roomId) values ('hello', 1, 1);
insert into messages (txt, userId, roomId) values ('from', 1, 1);
insert into messages (txt, userId, roomId) values ('the', 1, 1);
insert into messages (txt, userId, roomId) values ('server', 1, 1);

-- SELECT messages.message, users.username, rooms.roomname FROM messages INNER JOIN users ON messages.userId = users.id INNER JOIN rooms ON roomId = messages.roomId;

/* Create other tables and define schemas for them here! */
-- CREATE TABLE IF NOT EXISTS friends (
--   id int auto_increment primary key,
--   username varchar(20),
--   friends varchar(20)
-- );

CREATE TABLE IF NOT EXISTS users (
  id int auto_increment primary key,
  username varchar(20),
  friends varchar(20)
) engine = InnoDB;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

