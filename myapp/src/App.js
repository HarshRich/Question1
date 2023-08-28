import React, { useState, useEffect } from 'react';

function calculateRewardPoints(amount) {
  if (amount > 100) {
    return (amount - 100) * 2 + 50;
  } else if (amount > 50) {
    return amount - 50;
  }
  return 0;
}

function CustomerRewards({ transactions }) {
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    // Simulate an asynchronous API call to fetch data
    // Here, we'll just use the provided transactions dataset
    const rewards = transactions.map((transaction) => {
      const totalReward = transaction.reduce((total, amount) => total + calculateRewardPoints(amount), 0);
      return { rewards: totalReward, transactions: transaction };
    });
    setRewardData(rewards);
  }, [transactions]);

  return (
    <div>
      <h2>Customer Rewards</h2>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Transactions</th>
            <th>Rewards</th>
          </tr>
        </thead>
        <tbody>
          {rewardData.map((data, index) => (
            <tr key={index}>
              <td>Month {index + 1}</td>
              <td>{data.transactions.join(', ')}</td>
              <td>{data.rewards}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  // Mock dataset of transactions for three months
  const transactions = [
    [120, 50, 80], // Month 1
    [60, 110, 70], // Month 2
    [90, 30, 120], // Month 3
  ];

  return (
    <div className="App">
      <CustomerRewards transactions={transactions} />
    </div>
  );
}

export default App;
