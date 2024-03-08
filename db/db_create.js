const db = require("./db_connection")

// Drop any existing tables
const drop_dessert_table_sql = "drop table if exists assignments";

// Execute the query
db.execute(drop_dessert_table_sql);

const drop_flavor_table_sql = "drop table if exists subjects";

db.execute(drop_flavor_table_sql);

const create_flavor_table_sql = `CREATE TABLE flavors (
    flavorId INT NOT NULL AUTO_INCREMENT,
    flavorName VARCHAR(45) NOT NULL,
    PRIMARY KEY (flavorId));`;

db.execute(create_flavor_table_sql);

// Create the assignments table
const create_order_table_sql = `CREATE TABLE dessert (
    dessertId INT NOT NULL AUTO_INCREMENT,
    dessertFlavor VARCHAR(45) NOT NULL,
    quantity INT NULL,
    description VARCHAR(150) NULL,
    PRIMARY KEY (dessertId),
    INDEX assignmentSubject_idx (subjectId ASC),
    CONSTRAINT dessertFlavor
      FOREIGN KEY (flavorId)
      REFERENCES dessert (dessertId)
      ON DELETE RESTRICT
      ON UPDATE CASCADE);`;

db.execute(create_order_table_sql);

db.end();