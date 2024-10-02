const express = require('express');
const app = express();

app.get('/sql', (req, res) => {
    try{
        console.log('Enter in sql call');
        // const config = {
        //     user: 'ershubhamguptaMs',
        //     password: "Hrhk@1234",
        //     server: "kubernetes-sql-server", // Azure SQL server name
        //     database: "kubernetes-sql-db",
        //     options: {
        //         encrypt: true // Use encryption for Azure SQL
        //     }
        // };
        
        // sql.connect(config)
        //     .then(pool => {
        //         console.log('Connected to SQL Database');
        //         // Query your database here
        //         return pool.request().query('SELECT * FROM Orders');
        //     })
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(err => {
        //         console.error('SQL Connection Error:', err);
        //     });
        const sql = require('mssql');

    }
    catch(Err){
        console.log('Err=============', Err);
    }
});

app.get('/', async (req, res) => {
    try{
        console.log('Enter in / route');
        const sql = require('mssql');
        const config = {
            user: 'ershubhamguptaMs',
            password: "Hrhk@1234",
            server: "kubernetes-sql-server.database.windows.net", // Azure SQL server name
            database: "kubernetes-sql-db",
            options: {
                encrypt: true // Use encryption for Azure SQL
            }
        };
        
        const pool = await sql.connect(config);
        console.log('Connected to SQL Database');
        // Query your database here
        const result = await pool.request().query('SELECT * FROM products');
        console.log('result========', result);
        return res.json(result.recordset);
    }
    catch(err){
        console.log('Err in / route=============', err);
    }
});


app.listen(8002, () => {
    console.log('Product Service running on port 8002');
});
