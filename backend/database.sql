CREATE TABLE row(
  id          SERIAL PRIMARY KEY,
  name        VARCHAR(255),
  amount      INT,
  distance    INT,
  createdAt   TIMESTAMP(6)
);
