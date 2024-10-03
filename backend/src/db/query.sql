CREATE DATABASE db_pagoplux;
USE db_pagoplux;

CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(150) NOT NULL
);

insert into users (name, email, password) values ('Juan', 'juan@gmail.com', '123456');
select * from users;