<h3 align="center">Phone Number Formatter</h3>

## 🧐 About

Format any valid Nigeria number into international format.

### Installing

```sh
$ npm install phone-number-formatter --save
```

Usage 

```js
const { NigeriaPhoneNumberFormatter } = require('phone-number-formatter');


const numbers = ['08012345678', '2348102345678', '07012345678', '+23481098765432'];

const newNumbers1 = NigeriaPhoneNumberFormatter(numbers);

//console.log(newNumbers1);
//['2348012345678', '2348102345678', '2347012345678', '23481098765432']

//adding prepend to the numbers
const newNumbers2 = NigeriaPhoneNumberFormatter(numbers, {prepend: '+'});

//console.log(newNumbers);
//['+2348012345678', '+2348102345678', '+2347012345678', '+23481098765432']
```