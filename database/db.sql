CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_id TEXT
);

CREATE TABLE economy(
    id SERIAL PRIMARY KEY,
    money BIGINT,
    FOREIGN KEY (money) REFERENCES users (id)

);