// Variables

var sideButton = document.querySelector('#side-button')
var mainButton = document.querySelector('#main-button')
var dessertButton = document.querySelector('#dessert-button')
var letsCookButton = document.querySelector('#lets-cook-button')
var entireMealButton = document.querySelector('#entire-meal-button')
var potImageBox = document.querySelector('#pot-image-box')
var foodSuggestionBox = document.querySelector('#food-suggestion-box')
var foodIdea = document.querySelector('#food-idea')

// Event Listeners
sideButton.addEventListener('click', function(){
    getRandomIndex(sides)
    seeFoodSuggestion()
    randomizeSides()
    selectSide()
})

mainButton.addEventListener('click', function () {
    getRandomIndex(mains)
    seeFoodSuggestion()
    randomizeMains()
    selectMain()
})

dessertButton.addEventListener('click', function () {
    getRandomIndex(desserts)
    seeFoodSuggestion()
    randomizeDesserts()
    selectDessert()
})

letsCookButton.addEventListener('click', function() {
    getRandomIndex(desserts)
    seeFoodSuggestion()
    randomMeal()

})

entireMealButton.addEventListener('click', selectEntireMeal)


// Functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomizeSides() {
foodIdea.innerText = sides[getRandomIndex(sides)]
}

function randomizeMains() {
    foodIdea.innerText = mains[getRandomIndex(mains)]
}

function randomizeDesserts() {
    foodIdea.innerText = desserts[getRandomIndex(desserts)]
}

function seeFoodSuggestion() {
    potImageBox.classList.add("hidden")
    foodSuggestionBox.classList.remove("hidden")
}

function selectSide() {
    sideButton.checked = true
    dessertButton.checked = false
    mainButton.checked = false
    entireMealButton.checked = false
}

function selectMain() {
    sideButton.checked = false
    dessertButton.checked = false
    mainButton.checked = true
    entireMealButton.checked = false
}

function selectDessert() {
    sideButton.checked = false
    dessertButton.checked = true
    mainButton.checked = false
    entireMealButton.checked = false
}

function selectEntireMeal() {
    sideButton.checked = false
    dessertButton.checked = false
    mainButton.checked = false
    entireMealButton.checked = true
}

function randomMeal(){
    if (entireMealButton.checked) {
        foodIdea.innerText = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]} for dessert!`
    }
    foodIdea.style.fontSize= "20px"
    foodIdea.style.margin= "20px"
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
