const { Schema, model } = require('mongoose');

const transactionSchema = new Schema ({

    text: String,
    amount: Number

}, {
    timestamps: true
}
);

const Transaction = model('Transaction', transactionSchema)

module.exports = Transaction;  
