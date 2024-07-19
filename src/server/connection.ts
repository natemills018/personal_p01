import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    user:'',
    host: '',
    password: '',
    database: ''
})

export default pool;


