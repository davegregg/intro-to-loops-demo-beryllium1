let learners = [
    "Israel", "Sabrina", "Sue", "Loree", "Maria", "Dwight", "Katie", "Veronica", "Mandy"
]

// console.log(learners[0])
// console.log(learners[1])
// console.log(learners[2])
// console.log(learners[3])
// console.log(learners[4])
// console.log(learners[5])

{
    // Counter pattern
    let currentIndex = 0
    while (currentIndex < learners.length) { // 0
        let currentLearner = learners[currentIndex]
        
        // ...
        console.log(currentLearner)
        // ...

        currentIndex += 1
    }
}

// ...

{
    let restaurants = ["Go Stir Fry", "In'n'Out", "Pizza La", "Don Pablo", "Kung Pow", "Chuck E. Cheese"]

    let currentIndex = 0
    while (currentIndex < restaurants.length) { // 0
        let currentRestaurant = restaurants[currentIndex]
        
        // ...
        console.log(currentRestaurant)
        // ...

        currentIndex += 1
    }
}