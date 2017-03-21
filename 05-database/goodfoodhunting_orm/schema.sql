CREATE TABLE dishes (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400) NOT NULL,
  image_url TEXT

);

-- NOT NULL VALIDATION FOR EMPTY STRING

CREATE TABLE dish_types (
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(400)
);

INSERT INTO dish_types(name) VALUES ('breakfast');
INSERT INTO dish_types(name) VALUES ('brunch');
INSERT INTO dish_types(name) VALUES ('dinner');
INSERT INTO dish_types(name) VALUES ('dessert');

CREATE TABLE users (
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(400) NOT NULL,
  password_digest VARCHAR(400) NOT NULL
);


CREATE TABLE comments (
  id SERIAL4 PRIMARY KEY,
  body TEXT,
  dish_id INTEGER
);


ALTER TABLE comments
  ADD user_id INTEGER
}
