drop database if exists mydb;

create database mydb;
use mydb;

create table lists(
  id integer auto_increment,
  value text,
  primary key(id)
);