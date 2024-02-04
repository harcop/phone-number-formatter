import { convertNigeriaPhoneNumberToInternationFormat, validateNigeriaPhoneNumber } from '../src/index';

describe('convertNigeriaPhoneNumberToInternationFormat', () => {
  it('should convert phone numbers to international format', () => {
    const phoneNumbers = ['07012345678', '7012345678', '23407012345678', '2347012345678', '+23407012345678', '+2347012345678', '09123456789'];
    const result = convertNigeriaPhoneNumberToInternationFormat({ phoneNumbers });
    expect(result).toEqual(['2347012345678', '2347012345678', '2347012345678', '2347012345678', '2347012345678', '2347012345678', '2349123456789']);
  })

  it('should convert a single phone number to international format', () => {
    const phoneNumbers = '2347012345678';
    const result = convertNigeriaPhoneNumberToInternationFormat({ phoneNumbers });
    expect(result).toEqual(['2347012345678']);
  })

  it('should convert phone numbers to international format with + prepend and append with #', () => {
    const phoneNumbers = ['07012345678', '7012345678'];
    const result = convertNigeriaPhoneNumberToInternationFormat({ phoneNumbers, options: { prepend: '+', append: '#' } });
    expect(result).toEqual(['+2347012345678#', '+2347012345678#']);
  })

  it('should return empty when passed invalid phone numbers', () => {
    const phoneNumbers = ['0701234567', '701234567'];
    const result = convertNigeriaPhoneNumberToInternationFormat({ phoneNumbers });
    expect(result).toEqual([]);
  })

  it('should return only one valid phone nunmber when passed invalid phone numbers except one valid phone number', () => {
    const phoneNumbers = ['0701234567', '7012345678'];
    const result = convertNigeriaPhoneNumberToInternationFormat({ phoneNumbers });
    expect(result).toEqual(['2347012345678']);
  })
})

describe('validatePhoneNumber', () => {
  it('should return true when passed valid phone number', () => {
    const phoneNumber = '07012345678';
    const result = validateNigeriaPhoneNumber(phoneNumber);
    expect(result).toBeTruthy();
  })

  it('should return false when passed invalid phone number', () => {
    const phoneNumber = '0701234567';
    const result = validateNigeriaPhoneNumber(phoneNumber);
    expect(result).toBeFalsy();
  })
})
