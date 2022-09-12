CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_id TEXT,
    coins BIGINT DEFAULT 0,
    timely BIGINT DEFAULT 0
 );

CREATE TABLE economy(
    id SERIAL PRIMARY KEY,
    money BIGINT,
    timely,
    FOREIGN KEY (id) REFERENCES users (id)
    
);
CREATE TABLE transactions(
    id SERIAL PRIMARY KEY,
    money BIGINT,
    FOREIGN KEY (id) REFERENCES users (id)

);
