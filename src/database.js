const postgres= require('pg');

const pool =new postgres.Pool({

    user: 'postgres',
    host: 'localhost',
    password: 'princho4',
    database: 'forms',
    port: '5432'
});

module.exports = pool;