CREATE TABLE users (
  id integer PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  link VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  about VARCHAR(255) NOT NULL,
  photo VARCHAR(255) NOT NULL
)

CREATE TABLE sets (
  userId integer REFERENCES users(id),
  id integer PRIMARY KEY,
  photo VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  date VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
)
