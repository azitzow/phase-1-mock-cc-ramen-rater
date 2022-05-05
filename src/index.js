// write your code here
document.addEventListener('DOMContentLoaded', (event) => {
  fetch('http://localhost:3000/ramens').then(response => response.json()).then(data => allRamen(data))
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', handleSubmit)
})

const aRamen = item => {
  const photo = document.querySelector('.detail-image');
  const header = document.querySelector('.name');
  const restaurantName = document.querySelector('.restaurant');
  const rate = document.querySelector('#rating-display');
  const comments = document.querySelector('#comment-display');

  photo.src = item.image;
  header.textContent = item.name;
  restaurantName.textContent = item.restaurant;
  rate.textContent = item.rating;
  comments.textContent = item.comment;

  const div = document.querySelector('#ramen-menu');
}

const allRamen = (ramens) => {
  ramens.forEach((ramen) => renderRamen(ramen));
}

const renderRamen = (ramen) => {
  // create an img tag, text tag,
  const img = document.createElement('img');
  img.src = ramen.image;
  const div = document.querySelector('#ramen-menu');
  img.addEventListener('click', (e) => {
    aRamen(ramen);
  })
  div.append(img);
}

// make a function
const handleSubmit = (e) => {
  e.preventDefault();
  const ramen = {
    // "id": ,
    "name": e.target.name.value,
    "restaurant": e.target.restaurant.value,
    "image": e.target.image.value,
    "rating":e.target.rating.value,
    "comment": e.target['new-comment'].value
  }
  renderRamen(ramen);
}