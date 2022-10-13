
let _options = {};

const NigeriaPhoneNumberFormatter = (numbers, options = {}) => {
    let arrNumbers = [numbers];
    let isArray = false;

    if (Array.isArray(numbers)) {
        isArray = true;
        arrNumbers = [...numbers];
    }

    _options = options;

    const _finalNumbers = [];
    for (const _number of arrNumbers) {
        const _num = _number
                    .toString()
                    .trim()
                    .replace(/\s/gu, '')
        const responseNumber = convert(_num);
        if (Number.isInteger(Number(responseNumber)) && responseNumber.length > 10) {
            _finalNumbers.push(responseNumber); 
        }
    }
    return isArray ? _finalNumbers : _finalNumbers[0];
};

function convert (_number) {
    if (_number.substr(0, 4) === '+234') {
        return sliceAndConvert(_number.substr(1)); // remove +
    } else if (_number.substr(0, 3) === '234') {
        return sliceAndConvert(_number);
    } 
    return branchAndConvert(_number);
}

//number that start with 
function sliceAndConvert (_number) {
    const _firstDigit = _number.slice(3); // remove 234
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

module.exports = { NigeriaPhoneNumberFormatter };
