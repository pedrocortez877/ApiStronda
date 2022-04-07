import TransactionsRepository from '../Repositories/TransactionsRepository.js';

class TransactionsService {
  async create(data) {
    const transactions = await TransactionsRepository.create(data);
    return transactions;
  }

  async read() {
    const transactions = await TransactionsRepository.read();
    return transactions;
  }

  async update(data) {
    const updatedTransactions = await TransactionsRepository.update(data);
    return updatedTransactions;
  }

  async delete(data) {
    const deletedTransactions = await TransactionsRepository.delete(data);
    return deletedTransactions;
  }
}

export default new TransactionsService();
