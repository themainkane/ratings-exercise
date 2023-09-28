class RatingsWidget {
  constructor(title) {
    this.element = document.createElement('div');
    this.title = title;
    this.refreshElement();
    
  }

  refreshElement() {
    this.element.innerHTML =  `<div class="rating">
    <div class="title">${this.title}</div>
    <div class="rating__value">3</div>
    <div class="rating__stars">
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star rating__star--on"></div>
      <div class="rating__star"></div>
      <div class="rating__star"></div>
    </div>
  </div>`;

const textRating = this.element.querySelector(".rating__value");
const stars = this.element.querySelectorAll(".rating__star");

stars.forEach((star, index) => {
  star.addEventListener("click",  async (e) => {                                  //call async on the star.forEach
    let officialRating = textRating.textContent = index + 1;
    stars.forEach((starInside, indexInside) => {
      starInside.classList.remove("rating__star--on");
      if (indexInside <= index) {
        starInside.classList.add("rating__star--on");
        }
      });                                                                         //after styling logic continue with relevant awaits
      const postRatings = await fetch('https://test-api.codingbootcamp.cz/api/fe9c10b8/ratings', {
        "method": "POST",
        "body": JSON.stringify({
          "rating_subject": this.title,
          "rating_value": officialRating
            }),
          "headers": {
            "Content-Type": 'application/json'
          }
      })
      const usableRatings = await postRatings.json();
      console.log(usableRatings);
    });
  });
}

}

const ratingsWidget1 = new RatingsWidget('John Wick 4');
const ratingsWidget2 = new RatingsWidget('Oppenheimer');
const ratingsWidget3 = new RatingsWidget('Barbie');
const ratingsWidget4 = new RatingsWidget('Ready Player 1');
const ratingsWidget5 = new RatingsWidget('Turbo');
const ratingsWidget6 = new RatingsWidget('Wrath of Man');


document.body.appendChild(ratingsWidget1.element)
document.body.appendChild(ratingsWidget2.element)
document.body.appendChild(ratingsWidget3.element)
document.body.appendChild(ratingsWidget4.element)
document.body.appendChild(ratingsWidget5.element)






