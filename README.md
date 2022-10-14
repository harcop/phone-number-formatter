<h3 align="center">Phone Number Formatter</h3>

## 🧐 About

Format any valid Nigeria number into international format.

### Installing

```sh
$ npm install @toluwap/phone-number-formatter --save
```

Usage 
```js
const { convertPhoneNumberToInternationFormat } = require('@toluwap/phone-number-formatter');
```
```ts
import { convertPhoneNumberToInternationFormat } from ('@toluwap/phone-number-formatter');
```

```js
//using array of phoneNumbers
const phoneNumbers = ['08012345678', '2348102345678', '07012345678', '+23481098765432'];

const phoneNumbers1 = convertPhoneNumberToInternationFormat({phoneNumbers: phoneNumbers});
// ['2348012345678', '2348102345678', '2347012345678', '23481098765432']

//adding prepend to the numbers
const phoneNumbers1 = convertPhoneNumberToInternationFormat({phoneNumbers: phoneNumbers, options: { prepend: '+'}});
//['+2348012345678', '+2348102345678', '+2347012345678', '+23481098765432']
```
