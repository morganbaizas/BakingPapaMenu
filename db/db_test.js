const db = require("./db_connection");

// execute query, print result or error
db.execute('select 1 + 1 as solution', (error, results) => {
    if(error) {
        throw error;
    }
    console.log(results);
});

db.end();