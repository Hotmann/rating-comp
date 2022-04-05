'use strict';

const sectionRating = document.querySelector('.section-rating');
const sectionThanks = document.querySelector('.section-thanks');
const ratingBtn = document.querySelectorAll('.btn-rating-num');
const submitBtn = document.querySelector('.btn-submit-rat');
const ratingNum = document.querySelector('.rating');

////////////////////////////////////////
//Create a click on rating number handler
let btn = 0;
ratingBtn.forEach(t => {
  t.addEventListener('click', function () {
    ratingBtn.forEach(e => {
      e.style.backgroundColor = `hsl(216, 12%, 54%)`;
      e.style.color = `hsl(217, 12%, 63%)`;
    });
    btn = this.innerText;
    this.style.backgroundColor = `hsl(25, 97%, 53%)`;
    this.style.color = `hsl(0, 0%, 100%)`;
  });
});

//Submit button
submitBtn.addEventListener('click', function () {
  if (btn === 0) {
    alert('Please rate us!');
  } else {
    // Let the "Thank you" card show the rating number selected
    ratingNum.textContent = btn;

    // See the "Thank you" card state after submitting a rating
    sectionRating.classList.add('hidden');
    sectionThanks.classList.remove('hidden');
  }
});
