// Variables
var sideButton = document.querySelector('#side-button')
var mainButton = document.querySelector('#main-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector('#lets-cook-button')
var entireMealButton = document.querySelector('#entire-meal-button')
var potImageBox = document.querySelector('#pot-image-box')
var foodSuggestionBox = document.querySelector('#food-suggestion-box')
var foodIdea = document.querySelector('#food-idea')
var allButtons = document.querySelectorAll('.button')

// Event Listeners
sideButton.addEventListener('click', function(){
    getRandomIndex(sides)
    seeFoodSuggestion()
    randomizeFoods(sides)
    selectButton(sideButton)
})

mainButton.addEventListener('click', function () {
    getRandomIndex(mains)
    seeFoodSuggestion()
    randomizeFoods(mains)
    selectButton(mainButton)
})

dessertButton.addEventListener('click', function () {
    getRandomIndex(desserts)
    seeFoodSuggestion()
    randomizeFoods(desserts)
    selectButton(dessertButton)
})

letsCookButton.addEventListener('click', function() {
    getRandomIndex(sides)
    seeFoodSuggestion()
    randomMeal()

})

entireMealButton.addEventListener('click', selectEntireMeal)


// Functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomizeFoods(type) {
foodIdea.innerText = type[getRandomIndex(type)]
}


function seeFoodSuggestion() {
    potImageBox.classList.add("hidden")
    foodSuggestionBox.classList.remove("hidden")
}

function selectButton(type) {
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].checked = false
        type.checked = true
    }
}

// function selectMain() {
//     sideButton.checked = false
//     dessertButton.checked = false
//     mainButton.checked = true
//     entireMealButton.checked = false
// }

// function selectDessert() {
//     sideButton.checked = false
//     dessertButton.checked = true
//     mainButton.checked = false
//     entireMealButton.checked = false
// }

function selectEntireMeal() {
    sideButton.checked = false
    dessertButton.checked = false
    mainButton.checked = false
    entireMealButton.checked = true
}

function randomMeal() {
    if (entireMealButton.checked) {
        foodIdea.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
    }
    foodIdea.style.fontSize= "20px"
    foodIdea.style.margin= "20px"
}

// Arrays
var sides = [
    "French Fries",
    "Side Salad",
    "Rice",
    "Roasted Potatoes",
    "Cornbread",
    "Grilled Vegetables",
    "Roasted Broccoli",
    "Asparagus",
    "Pasta Salad",
    "Carrots",
    "Peas",
    "Roasted Butternut Squash"
]

var mains = [
    "Spaghetti and Meatballs",
    "Pineapple Chicken",
    "Shakshuka",
    "Thai Yellow Curry",
    "Bibimbap",
    "Chicken Parmesean",
    "Butternut Squash Soup",
    "BBQ Chicken Burgers",
    "Ramen",
    "Empanadas",
    "Chicken Fried Rice",
    "Sheet Pan Fajitas",
    "Margarita Pizza"
]

var desserts = [
    "Apple Pie",
    "Lemon Meringue Pie",
    "Black Forest Cake",
    "Banana Bread",
    "Peach Cobbler",
    "Cheesecake",
    "Funfetti Cake",
    "Baklava",
    "Flan",
    "Macarons",
    "Macaroons",
    "Chocolate Cupcakes",
    "Pavlova",
    "Pumpkin Pie",
    "Key Lime Pie",
    "Tart Tatin",
    "Croissants",
    "Eclairs"
]
