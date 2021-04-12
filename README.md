# Income Tax Calculator
Simple cli for [Money Saving Experts - Income Tax Calculator](https://www.moneysavingexpert.com/tax-calculator/)

> Note: Currently only support salary as a param

## Install
Install globally using npm
```sh
npm i -g dsimms-tax-calc
```
## Usage
In a termial or shell run `tax` followed by a yearly salary
```sh
tax 40000
```
## Response
| (index) | month | week | year |
| --- | --- | --- | --- |
| grossWage | 2500 | 577 | 30000 |
| nationalInsurance | 204 | 47 | 2452 |
| pension | 0 | 0 | 0 |
| pensionHMRC | 0 | 0 | 0 |
| studentLoan | 0 | 0 | 0 |
| takeHomePay | 2005 | 463 | 24064 |
| taxFreeAllowance | 1048 | 242 | 12579 |
| taxPaid | 290 | 67 | 3484 |
| taxableWage | 1452 | 335 | 17421 |

