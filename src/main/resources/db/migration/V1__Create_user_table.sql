create table USER
(
    ID           INT auto_increment PRIMARY KEY NOT NULL,
    ACCOUNT      VARCHAR(100),
    NAME         VARCHAR(50),
    TOKEN        CHAR(36),
    GMT_CREATE   BIGINT,
    GMT_MODIFIED BIGINT
);