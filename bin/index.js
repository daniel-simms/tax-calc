#!/usr/bin/env node

const salary = parseInt(process.argv[2]);
const axios = require("axios");

if (isNaN(salary)) return console.log("Please enter a yearly salary - tax 30000");
if (process.argv[3]) return console.log("Please only enter a yearly salary - tax 30000");

const URL =
  "https://prod-api.moneysavingexpert.com/income-tax-calculator/calculate-tax";
const body = {
  grossWage: salary,
  age: "0",
  allowance: "allowance",
  payPeriod: "1",
  pensionContribution: { type: "%" },
  pensionContributionType: "percent",
  taxYear: new Date().getFullYear(),
};
const payload = JSON.stringify(body);

axios.post(URL, payload).then(({ data }) => {
  console.table(data);
});
