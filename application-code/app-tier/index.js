const transactionService = require('./TransactionService');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// HEALTH CHECK
app.get('/health', (req, res) => {
    res.json({ status: "OK" });
});

// ADD TRANSACTION
app.post('/transaction', async (req, res) => {
    try {
        const { amount, desc } = req.body;

        if (!amount || !desc) {
            return res.status(400).json({ message: "Missing fields" });
        }

        await transactionService.addTransaction(amount, desc);

        res.status(200).json({ message: 'Transaction added successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding transaction', error: err.message });
    }
});

// GET ALL TRANSACTIONS
app.get('/transaction', async (req, res) => {
    try {
        const results = await transactionService.getAllTransactions();

        const formatted = results.map(row => ({
            id: row.id,
            amount: row.amount,
            description: row.description
        }));

        res.status(200).json({ result: formatted });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching transactions', error: err.message });
    }
});

// DELETE ALL
app.delete('/transaction', async (req, res) => {
    try {
        await transactionService.deleteAllTransactions();
        res.status(200).json({ message: "All transactions deleted" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed", error: err.message });
    }
});

// DELETE ONE
app.delete('/transaction/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await transactionService.deleteTransactionById(id);

        res.status(200).json({ message: `Transaction ${id} deleted` });
    } catch (err) {
        res.status(500).json({ message: "Delete failed", error: err.message });
    }
});

// GET ONE
app.get('/transaction/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await transactionService.findTransactionById(id);

        if (!result.length) {
            return res.status(404).json({ message: "Not found" });
        }

        res.json(result[0]);
    } catch (err) {
        res.status(500).json({ message: "Error fetching transaction", error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
});