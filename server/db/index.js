var mysql = require('mysql');

// Create a database connection and export it from this file.
var dbConnection = mysql.createConnection({
    // You will need to connect with the user "root", no password,
    user: 'root',
    // and to the database "chat".
    database: 'chat'
})
dbConnection.connect((err)=> {
    if (err) {
        console.log('Connection failed');
    } else {
        console.log('Connection successful');
    }
});


module.exports = dbConnection;