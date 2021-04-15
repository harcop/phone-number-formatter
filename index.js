
let _options = {};

const NigeriaPhoneNumberFormatter = (numbers, options = {}) => {
    _options = options;
    const _finalNumbers = [];
    for (const _number of numbers) {
        const _no = convert(_number);
        if (Number.isInteger(Number(_no)) && _no.length > 10) {
            _finalNumbers.push(_no); 
        }
    }
    return _finalNumbers;
};

function convert (_number) {
    const _firstDigit = _number.substr(0, 1);
    if (_firstDigit === '+') {
        return sliceAndConvert(_number.substr(1));
    } else if (_firstDigit === '2') {
        return sliceAndConvert(_number);
    } 
    return branchAndConvert(_number);
}

//number that start with 
function sliceAndConvert (_number) {
    const _firstDigit = _number.slice(3); //remove 234
    return branchAndConvert(_firstDigit);
}

function branchAndConvert (number) {
    const prepend = _options.prepend ? _options.prepend : '';
    if (number.trim()) {
        let _number = number;
        const _firstDigit = number.substr(0, 1);
        if (_firstDigit === '0') {
            _number = `${number.substr(1)}`;
        } else {
            _number = `${number}`;
        }
        return `${prepend}234${_number}`;
    }
    return NaN;
}

// console.log(phoneNumberFormatter(_numbers));
module.exports = { NigeriaPhoneNumberFormatter };