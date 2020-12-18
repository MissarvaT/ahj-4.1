import CardValidatorWidget from './CardValidatorWidget';
import definePaySystem from './definePaySystem';

const cardValidatorWidget = new CardValidatorWidget();

const body = document.querySelector('body');
cardValidatorWidget.renderWidget(body);

const input = document.querySelector('.card-number-input');
const button = document.querySelector('.check-btn');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const possibleSystems = ['mir', 'diners_club', 'jcb', 'amex', 'visa', 'master', 'discover'];
  const PaySystemName = definePaySystem(input.value);
  if (possibleSystems.includes(PaySystemName)) {
    cardValidatorWidget.highlineIcon(PaySystemName);
  } else {
    cardValidatorWidget.showError(PaySystemName);
  }
  input.value = '';
});

input.addEventListener('click', () => {
  const icons = Array.from(document.querySelectorAll('.card'));
  icons.forEach((el) => el.classList.remove('disabled'));
});
