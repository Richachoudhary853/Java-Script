const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: new Map(),
    expenses: new Map(),

    // Method to calculate total income
    totalIncome() {
        let total = 0;
        for (let amount of this.incomes.values()) {
            total += amount;
        }
        return total;
    },

    // Method to calculate total expenses
    totalExpense() {
        let total = 0;
        for (let amount of this.expenses.values()) {
            total += amount;
        }
        return total;
    },

    // Method to get account information
    accountInfo() {
        return `Account Holder: ${this.firstName} ${this.lastName}\nTotal Income: $${this.totalIncome()}\nTotal Expense: $${this.totalExpense()}\nAccount Balance: $${this.accountBalance()}`;
    },

    // Method to add income
    addIncome(description, amount) {
        this.incomes.set(description, amount);
    },

    // Method to add expense
    addExpense(description, amount) {
        this.expenses.set(description, amount);
    },

    // Method to calculate account balance
    accountBalance() {
        return this.totalIncome() - this.totalExpense();
    }
};

// Example usage:

// Adding incomes
personAccount.addIncome('Salary', 5000);
personAccount.addIncome('Freelance', 2000);

// Adding expenses
personAccount.addExpense('Rent', 1200);
personAccount.addExpense('Groceries', 300);
personAccount.addExpense('Utilities', 150);

console.log(personAccount.accountInfo());
