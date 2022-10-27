// Variables

var sideButton = document.querySelector('#side-button')
var mainButton = document.querySelector('#main-button')
var dessertButton = document.querySelector('#dessert-button')
var potImageBox = document.querySelector('#pot-image-box')
var foodSuggestionBox = document.querySelector('#food-suggestion-box')
// Event Listeners

sideButton.addEventListener('click', function(){
    getRandomIndex(sides)
    seeFoodSuggestion()
    randomize()
})

// mainButton.addEventListener('onchange',)
// dessertButton.addEventListener('onchange',)

// Functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomize() {
foodSuggestionBox.innerText = sides[getRandomIndex(sides)]
}

function seeFoodSuggestion() {
    console.log("TESTTTT")
    potImageBox.classList.toggle("hidden")
    foodSuggestionBox.classList.toggle("hidden")
}

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
