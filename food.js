
var input_text = 'meat';
document.getElementById('bt1').addEventListener('click', reciv_value);
document.getElementById('bt2').addEventListener('click', reciv_value);
document.getElementById('bt3').addEventListener('click', reciv_value);
document.getElementById('bt4').addEventListener('click', reciv_value);
document.getElementById('bt5').addEventListener('click', reciv_value);
document.getElementById('bt6').addEventListener('click', reciv_value);
document.getElementById('bt7').addEventListener('click', reciv_value);
document.getElementById('bt8').addEventListener('click', reciv_value);
function reciv_value(event) {
  input_text = event.target.value;
  console.log('search_input:', input_text);
  loadfood();
}
const loadfood = () => {


  console.log('search_input:', input_text);

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input_text}`
  fetch(url)
    .then(res => res.json())
    .then(data => showmeals(data.meals))
    .catch(error => console.log('error', error));
}
loadfood();
const showmeals = (meals) => {
  console.log("Data is:", meals);
  let container = document.getElementById("result-container");
  let headline = document.getElementById("headline");

  headline.innerHTML = `<h2 class="bg-green-100 text-center  italic hover:not-italic drop-shadow-lg " style="margin:10px;font-size:25px;border:1px solid yellowgreen;border-radius:3px;border-radius: 20px">
  𝓨𝓸𝓾𝓻 𝓓𝓮𝓼𝓲𝓻𝓮𝓭 𝓕𝓸𝓸𝓭 𝓘𝓽𝓮𝓶𝓼 𝓪𝓻𝓮 𝓗𝓮𝓻𝓮 :<span class="uppercase "style="color:red;font-size:25px;font-weight:bold"> ${input_text}</span></h2>`
  container.innerHTML = '';
  meals.forEach(element => {
    let meal_card = document.createElement('div');
    meal_card.classList = 'card card-compact bg-base-100  shadow-xl w-3/4';
    meal_card.style='margin:10%';
    meal_card.innerHTML = `
            
              <figure>
                <img
                  src=${element.strMealThumb}
                  alt="${element.strMeal}" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">${element.strMeal}</h2>
                <p title="${element.strInstructions}">${element.strInstructions.slice(0, 200)}...</p>
                <div class="card-actions justify-end">
                  <button onclick="handleShowDetails(${element.idMeal})"class="btn btn-primary">Large Image</button>
                </div>
              </div>
            `
      ;
    container.appendChild(meal_card);
  });


}
const handleShowDetails = (mealId) => {

  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => showMealDetails(data.meals[0]))
    .catch(error => console.log('error', error));

}

const showMealDetails = meal => {
  my_modal.showModal();
  console.log("meal is:", meal);
  const showDetailscontainer = document.getElementById("meal-details-container");
  showDetailscontainer.innerHTML = `<img src="${meal.strMealThumb}">`

  // {/* <button class="btn" onclick="my_modal_5.showModal()">open modal</button> */}
  my_modal.showModal();
}