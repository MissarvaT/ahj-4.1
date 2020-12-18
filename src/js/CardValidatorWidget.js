export default class CardValidatorWidget {
  constructor() {
  }

  getCardValidatorHTML() {
    return `    <div class="container">
        <h3>Check your credit card number</h3>
        <ul class="cards-list">
            <li><span class="card visa" title="Visa">Visa</span></li>
            <li><span class="card master" title="Mastercard">Mastercard</span></li>
            <li><span class="card amex" title="American Express">American Express</span></li>
            <li><span class="card discover" title="Discover">Discover</span></li>
            <li><span class="card jcb" title="JCB">JCB</span></li>
            <li><span class="card diners_club" title="Diners Club">Diners Club</span></li>
            <li><span class="card mir" title="MIR">МИР</span></li>
        </ul>
        <form class="check-form">
            <div class="form-group">
                <input class="card-number-input" type="text" placeholder="Credit card number">
                <button class="check-btn"><span>Click to Validate</span></button>
            </div>
        </form>
        <div class="modal">
          <div class="modal-header">
            <h3 class="modal-title">Название</h3>
            <a href="#close" title="Close" class="close">OK</a>
        </div>
      </div>
    </div>`;
  }

  renderWidget(element) {
    element.innerHTML = this.getCardValidatorHTML();
  }

  highlineIcon(name) {
    const icons = Array.from(document.querySelectorAll('.card'));
    icons.forEach((el) => el.classList.add('disabled'));
    const correctSystem = document.querySelector(`.card.${name}`);
    correctSystem.classList.remove('disabled');
  }

  showError(name) {
    const errorWindow = document.querySelector('.modal');
    const errorTitle = document.querySelector('.modal-title');
    errorTitle.innerText = name;
    errorWindow.style.opacity = 1;
    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', () => {
      errorWindow.style.opacity = 0;
    })
  }
}
