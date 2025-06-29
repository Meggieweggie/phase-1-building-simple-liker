// Defining text characters for the empty and full hearts for you to use later.
export const EMPTY_HEART = '♡';
export const FULL_HEART = '♥';

// Adding event listener to the modal to hide it when clicked.
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('#modal');
  console.log(modal); // Debug output
  if (modal) {
    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

// Function to toggle the heart state.
export function toggleHeart(heartElement) {
  if (heartElement.textContent === EMPTY_HEART) {
    heartElement.textContent = FULL_HEART;
    heartElement.classList.add('activated-heart');
  } else {
    heartElement.textContent = EMPTY_HEART;
    heartElement.classList.remove('activated-heart');
  }
}

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('main.js', () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;
  });

  it('contains a hidden modal', () => {
    const modal = document.querySelector('#modal');
    expect(modal).to.not.equal(null);
    expect(modal.style.display).to.equal('none');
  });
});
// main.js
const modal = document.createElement('div');
modal.id = 'modal';
modal.className = 'hidden';
modal.textContent = 'This is a modal';
document.body.appendChild(modal);

