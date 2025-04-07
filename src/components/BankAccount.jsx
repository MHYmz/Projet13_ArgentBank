import React from "react";

const BankAccount = ({ name, number, balance, details }) => {
  return (
    <section>
      <div >
        <h3>
          {name} ({number})
        </h3>
        <p>{balance}</p>
        <p>{details}</p>
      </div>
      <div>
        <button>View transactions</button>
      </div>
    </section>
  );
};

export default BankAccount;
