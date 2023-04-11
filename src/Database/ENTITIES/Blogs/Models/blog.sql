CREATE TABLE blog (
    blogid uuid NOT NULL,
    categoryid uuid NOT NULL,
    organizationid uuid NOT NULL,
    authorid uuid,
    title varchar(255),
    description text,
    featuredImg varchar(255) DEFAULT NULL::varchar,
    youtubeUrl varchar(255) DEFAULT NULL::varchar,
    createdat timestamp without time zone NOT NULL,
    status boolean default FALSE
);

