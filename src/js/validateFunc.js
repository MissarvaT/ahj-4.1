export default function validate(digits) {
  if (digits.length < 13) {
    return 'Card number cannot be less than 13 digits';
  }
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let cardNum = parseInt(digits[i]);
    if (isNaN(cardNum)) {
      return 'Not correct data! Please type in digits from 0 to 9';
    }

    if ((digits.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }
  return sum % 10 === 0;
}
