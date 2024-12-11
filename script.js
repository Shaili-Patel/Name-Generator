// Generate Prefix Of First Name
function genPrefix (firstName){
    if (firstName.length > 4){
        return 'The Great'
    }
    else {
        return 'Master'
    }
}

// Generate First Name Of Name
function genFirstName (firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a'){
        return 'Anthony'
    }
 else if (firstLetter === 'b') {
        return 'Bridgerton'
}
else if (firstLetter === 'c') {
    return 'Bert'
}
else if (firstLetter === 'd') {
    return 'Danbury'
}
else if (firstLetter === 'e') {
    return 'Eloise'
}
else if (firstLetter === 'f') {
    return 'Cam'
}
else if (firstLetter === 'g') {
    return 'John'
}
else {
    return 'Alex' //Default name for letters not matched
}
}

// Generate Middle Name

function genMiddleName (roadType, favoriteColor){
    if (roadType === 'road'){
        return `${favoriteColor}ridge`
    } else if (roadType === 'street'){
        return  `${favoriteColor}son`
    }
    else if (roadType === 'ave'){
        return  `${favoriteColor}son`
    }
    else {
        return  `${favoriteColor}stone`
    }
}

// Generate last Name

function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter === 'a'){
        return 'Shadow'
    }
    else if (lastLetter === 'e'){
        return 'Storm'
    }
    else if (lastLetter === 'i'){
        return 'Blaze'
    }
    else if (lastLetter === 'o'){
        return 'Thorn'
    }
    else if (lastLetter === 'u'){
        return 'Frost'
    }
    else {
        return 'Moon' //Default last name for letters not matched
    }

}

//Generate Suffix 
function genSuffix (favoriteAnimal){
    return `of the ${favoriteAnimal}`
}

//Master Function To Assemble Full Name
function genFullName () {
// Define Variables From Inputs
const firstName = document.getElementById('firstName').ariaValueMax.trim()
const lastName = document.getElementById('lastName').ariaValueMax.trim()
const monthType = document.getElementById('monthType').ariaValueMax.trim()
const titleType = document.getElementById('titleType').ariaValueMax.trim()
const favoriteAnimal = document.getElementById('favoriteAnimal').ariaValueMax.trim()

// Generate Each Part Of The Name Using Helper Functions
const prefix = genPrefix(firstName)
const newFirstName = genFirstName(firstName)
const middleName = genMiddleName(roadType, favoriteColor)
const newLastName = genLastName(lastName)
const suffix = genSuffix(favoriteAnimal)


}