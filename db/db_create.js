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

const create_customer_table_sql = `CREATE TABLE customer (
    customer_id INT NOT NULL AUTO_INCREMENT,
    order_id INT NOT NULL,
    first_name VARCHAR(45) NOT NULL,
    last_name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    phone_number VARCHAR(45) NOT NULL,
    PRIMARY KEY (customer_id, order_id))
    INDEX fk_order_customer_idx (order_id ASC);
    CONSTRAINT fk_order_customer
    FOREIGN KEY (order_id)
    REFERENCES web_apps_project_2324t2_TF_daymorell.order (order_id);`

db.execute(create_customer_table_sql);
  
  
const create_dessert_sql = `CREATE TABLE dessert (
    dessert_id INT NOT NULL AUTO_INCREMENT,
    dessert_flavor_id INT NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (dessert_id, dessert_flavor_id));
    INDEX fk_flavor_dessert_idx (dessert_flavor_id ASC);
    ADD CONSTRAINT fk_flavor_dessert
    FOREIGN KEY (dessert_flavor_id)
    REFERENCES web_apps_project_2324t2_TF_daymorell.dessert_flavor (dessert_flavor_id);`

db.execute(create_dessert_table_sql);
  
const create_order_table_sql = `CREATE TABLE order (
    order_id INT NOT NULL AUTO_INCREMENT,
    dessert_id INT NOT NULL,
    PRIMARY KEY (order_id),
    INDEX fk_dessert_order_idx (dessert_id ASC),
    CONSTRAINT fk_dessert_order
      FOREIGN KEY (dessert_id)
      REFERENCES web_apps_project_2324t2_TF_daymorell.dessert (dessert_id);`

db.execute(create_order_sql)
  
  
  CREATE TABLE `web_apps_project_2324t2_TF_daymorell`.`dessert_flavor` (
    `dessert_flavor_id` INT NOT NULL AUTO_INCREMENT,
    `flavor` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`dessert_flavor_id`));
  