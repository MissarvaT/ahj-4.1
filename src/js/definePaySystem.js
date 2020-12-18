import validate from './validateFunc';

export default function definePaySystem(digits) {
  if (validate(digits) === true) {
    if (digits.startsWith('2')) {
      return 'mir';
    } if (digits.startsWith('30') || digits.startsWith('36') || digits.startsWith('38')) {
      return 'diners_club';
    } if (digits.startsWith('31') || digits.startsWith('35')) {
      return 'jcb';
    } if (digits.startsWith('34') || digits.startsWith('37')) {
      return 'amex';
    } if (digits.startsWith('4')) {
      return 'visa';
    } if (digits.startsWith('51') || digits.startsWith('52') || digits.startsWith('53') || digits.startsWith('54') || digits.startsWith('55')) {
      return 'master';
    } if (digits.startsWith('60')) {
      return 'discover';
    }
  } else if (validate(digits) === false) {
      return 'Payment system is not defined';
  } else {
      return validate(digits);
  }
}
