const db = require('../db')

//Get every transaction a user makes in order to present on their audit
const getTransactionsByUser = (user_id) => {
    const transactions = db.any(`SELECT * FROM transactions WHERE user_id = $1`, user_id);
    return transactions;
}

const getAllTrans = () => {
    const trans = db.any(`SELECT * FROM transactions`);
    return trans
}
const postTransaction = (user_id, quantity, ticker, price_paid) => {
    const newTransaction = db.none(`INSERT INTO transactions (user_id, quantity, ticker, price_paid) VALUES ($1, $2, $3, $4)`, [user_id, quantity, ticker, price_paid])
    return newTransaction
}

module.exports = {
    getTransactionsByUser,
    postTransaction,
    getAllTrans
}