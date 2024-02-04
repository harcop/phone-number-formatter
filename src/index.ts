type phoneNumber = string | number

export type options = {
  prepend?: string
  append?: string
}

export type phoneNumberType = {
  phoneNumbers: phoneNumber | phoneNumber[],
  options?: options
}

// 0703, 703, 2340703, 234703, +2340703, +234703
const match1 = /^0(7|8|9)(0|1)\d{8}$/ // normal format
const match2 = /^(7|8|9)(0|1)\d{8}$/ // without first 0
const match3 = /^2340(7|8|9)(0|1)\d{8}$/ // 234 with normal format
const match4 = /^234(7|8|9)(0|1)\d{8}$/ // 234 without 0, international format
const match5 = /^\+2340(7|8|9)(0|1)\d{8}$/ // + with 234 with normal format
const match6 = /^\+234(7|8|9)(0|1)\d{8}$/ // + with international format

export function convertNigeriaPhoneNumberToInternationFormat({phoneNumbers, options = {}}: phoneNumberType): phoneNumber[] {
  const _numbers = Array.isArray(phoneNumbers) ? phoneNumbers : [phoneNumbers]
  const {prepend, append} = options
  const result: phoneNumber[] = []
  _numbers.forEach((phoneNumber) => {
    const convertedPhoneNumber = convertToInternationFormat(phoneNumber.toString())
    if (convertedPhoneNumber) {
      result.push((prepend || '') + convertedPhoneNumber + (append || ''))
    }
  })
  return result
}

function convertToInternationFormat(phoneNumber: string): string | boolean {
  if (validateNigeriaPhoneNumber(phoneNumber)) {
    if(match1.test(phoneNumber)) {
      return phoneNumber.replace('0', '234')
    } else if (match2.test(phoneNumber)) {
      return '234' + phoneNumber
    } else if(match3.test(phoneNumber)) {
      return phoneNumber.replace('0', '')
    } else if(match4.test(phoneNumber)) {
      return phoneNumber
    } else if(match5.test(phoneNumber)) {
      return phoneNumber.replace('+', '').replace('0', '')
    } else if (match6.test(phoneNumber)) {
      return phoneNumber.replace('+', '')
    }
  }
  return false
}

export function validateNigeriaPhoneNumber(number: string): boolean {
    return [match1, match2, match3, match4, match5, match6].some((match) => match.test(number))
}
