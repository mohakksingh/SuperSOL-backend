const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['superchat', 'nft'], required: true },
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  amount: { type: Number },
  nftId: { type: String },
  message: { type: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transaction', transactionSchema);