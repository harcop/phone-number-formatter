<h3 align="center">Phone Number Formatter</h3>

## 🧐 About

Format any valid Nigeria number into international format.

### Installing

```sh
$ npm install @toluwap/phone-number-formatter --save
```

Usage 

```js
const { NigeriaPhoneNumberFormatter } = require('@toluwap/phone-number-formatter');

//using array of phoneNumber
const numbers = ['08012345678', '2348102345678', '07012345678', '+23481098765432'];

const newNumbers1 = NigeriaPhoneNumberFormatter(numbers);
//console.log(newNumbers1);
//['2348012345678', '2348102345678', '2347012345678', '23481098765432']

//adding prepend to the numbers
const newNumbers2 = NigeriaPhoneNumberFormatter(numbers, {prepend: '+'});
//console.log(newNumbers2);
//['+2348012345678', '+2348102345678', '+2347012345678', '+23481098765432']

//using a single phoneNumber
const newNumbers3 = NigeriaPhoneNumberFormatter('08012345678');
//console.log(newNumbers3);
//2348012345678
```