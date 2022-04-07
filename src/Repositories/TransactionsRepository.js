import Transactions from '../Models/Transactions.js';

class TransactionsRepository {
  async create(data) {
    const transactions = await Transactions.create(data);
    return transactions;
  }

  async read() {
    const transactions = await Transactions.findAll();
    return transactions;
  }

  async update(data) {
    const { Id } = data;
    const updatedTransactions = await Transactions.update(data, {
      where: { Id },
    });
    return updatedTransactions;
  }

  async delete(data) {
    const { Id } = data;
    const deletedTransactions = await Transactions.destroy({ where: { Id } });
    return deletedTransactions;
  }

  async findOrCreate(name) {
    const transactions = await Transactions.findOrCreate({
      where: { Name: name },
    });
    return transactions[0].dataValues;
  }
}

export default new TransactionsRepository();
