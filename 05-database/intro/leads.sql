CREATE DATABASE leads_gen_app;

CREATE TABLE leads (
  id SERIAL4 PRIMARY KEY -- SERIAL4 is an integer and is incremental
  name VARCHAR(200),
  email VARCHAR(200),
  age integer
);

-- DROP TABLE leads; to delete TABLE called needs

SELECT * FROM leads;

INSERT INTO leads (name, email, age) VALUES ('jon snow',
  'jon@snow.gof', 29);

INSERT INTO leads (name, email, age) VALUES ('pokemon',
  'pokemon@poke.com', 1);

  INSERT INTO leads (name, email, age) VALUES ('pokemon',
    'pokemon@poke.com', 1);
