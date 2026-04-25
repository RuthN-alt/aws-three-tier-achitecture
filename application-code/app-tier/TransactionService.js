const dbcreds = require('./DbConfig');
const mysql = require('mysql');

const con = mysql.createConnection({
    host: dbcreds.DB_HOST,
    user: dbcreds.DB_USER,
    password: dbcreds.DB_PWD,
    database: dbcreds.DB_DATABASE
});

// CONNECT ON START
con.connect(err => {
    if (err) {
        console.error("DB connection failed:", err);
        return;
    }
    console.log("Connected to MySQL");
});

// ADD
function addTransaction(amount, desc) {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO transactions (amount, description) VALUES (?, ?)";

        con.query(sql, [amount, desc], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// GET ALL
function getAllTransactions() {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM transactions";

        con.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// GET ONE
function findTransactionById(id) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM transactions WHERE id = ?";

        con.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// DELETE ALL
function deleteAllTransactions() {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM transactions";

        con.query(sql, (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

// DELETE ONE
function deleteTransactionById(id) {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM transactions WHERE id = ?";

        con.query(sql, [id], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    addTransaction,
    getAllTransactions,
    findTransactionById,
    deleteAllTransactions,
    deleteTransactionById
};