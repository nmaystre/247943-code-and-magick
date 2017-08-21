'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'gb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];


var getRandomIndex = function (array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

var createElement = function (template) {
  var newElement = template.cloneNode(true);
  return newElement;
};

var fillProperty = function (element, propSelector, property, value) {
  var currentProperty = element.querySelector(propSelector);
  switch (property) {
    case 'text':
      currentProperty.textContent = value;
      break;
    case 'color':
      currentProperty.style.fill = value;
      break;
  }
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < 4; i++) {
  var name = WIZARD_NAMES[getRandomIndex(WIZARD_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomIndex(WIZARD_SURNAMES)];
  var coatColor = WIZARD_COATS[getRandomIndex(WIZARD_COATS)];
  var eyesColor = WIZARD_EYES[getRandomIndex(WIZARD_EYES)];
  var wizardElement = createElement(similarWizardTemplate);
  fillProperty(wizardElement, '.setup-similar-label', 'text', name);
  fillProperty(wizardElement, '.wizard-coat', 'color', coatColor);
  fillProperty(wizardElement, '.wizard-eyes', 'color', eyesColor);
  fragment.appendChild(wizardElement);
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

