// Generate First Name Of Name

function genFirstName(firstName, genderType) {
    console.log(firstName);
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (genderType === 'boy') {
        if (firstLetter === 'a') {
            return 'Anthony';
        } else if (firstLetter === 'b') {
            return 'Benedict';
        } else if (firstLetter === 'c') {
            return 'Colin';
        } else if (firstLetter === 'd') {
            return 'Damien';
        } else if (firstLetter === 'e') {
            return 'Edward';
        } else if (firstLetter === 'f') {
            return 'Frederick';
        } else if (firstLetter === 'g') {
            return 'George';
        } else if (firstLetter === 'h') {
            return 'Henry';
        } else if (firstLetter === 'i') {
            return 'Isaac';
        }else if (firstLetter === 'j') {
            return 'Julian';
        }else if (firstLetter === 'k') {
            return 'Kasper';
        }else if (firstLetter === 'l') {
            return 'Leopold';
        }else if (firstLetter === 'm') {
            return 'Maxwell';
        }else if (firstLetter === 'n') {
            return 'Nicholas';
        }else if (firstLetter === 'o') {
            return 'Oliver';
        }else if (firstLetter === 'p') {
            return 'Philip';
        }else if (firstLetter === 'q') {
            return 'Quentin';
        }else if (firstLetter === 'r') {
            return 'Rufus';
        }else if (firstLetter === 's') {
            return 'Simon';
        }else if (firstLetter === 't') {
            return 'Theodore';
        }else if (firstLetter === 'u') {
            return 'Ulysses';
        }else if (firstLetter === 'v') {
            return 'Vincent';
        }else if (firstLetter === 'w') {
            return 'William';
        }else if (firstLetter === 'x') {
            return 'Xavier';
        }else if (firstLetter === 'y') {
            return 'Yates';
        }else if (firstLetter === 'z') {
            return 'Zachary';
        }else {
            return 'Alex'; // Default name for boys
        }

        
    } else if (genderType === 'girl') {
        if (firstLetter === 'a') {
            return 'Alice';
        } else if (firstLetter === 'b') {
            return 'Bridget';
        } else if (firstLetter === 'c') {
            return 'Charlotte';
        } else if (firstLetter === 'd') {
            return 'Daphne';
        } else if (firstLetter === 'e') {
            return 'Eloise';
        } else if (firstLetter === 'f') {
            return 'Fiona';
        } else if (firstLetter === 'g') {
            return 'Grace';
        } else if (firstLetter === 'h') {
            return 'Hyacinth';
        } else if (firstLetter === 'i') {
            return 'Isabella';
        }else if (firstLetter === 'j') {
            return 'Juliet';
        }else if (firstLetter === 'k') {
            return 'Katherine';
        }else if (firstLetter === 'l') {
            return 'Lucinda';
        }else if (firstLetter === 'm') {
            return 'Margaret';
        }else if (firstLetter === 'n') {
            return 'Nadine';
        }else if (firstLetter === 'o') {
            return 'Olivia';
        }else if (firstLetter === 'p') {
            return 'Penelope';
        }else if (firstLetter === 'q') {
            return 'Quinn';
        }else if (firstLetter === 'r') {
            return 'Rosalie';
        }else if (firstLetter === 's') {
            return 'Sophia';
        }else if (firstLetter === 't') {
            return 'Tiana';
        }else if (firstLetter === 'u') {
            return 'Unity';
        }else if (firstLetter === 'v') {
            return 'Violet';
        }else if (firstLetter === 'w') {
            return 'Wiona';
        }else if (firstLetter === 'x') {
            return 'Xina';
        }else if (firstLetter === 'y') {
            return 'Yasmin';
        }else if (firstLetter === 'z') {
            return 'Zara';
        }else {
            return 'Ava'; // Default name for girls
        }
    }
}



// Generate Middle Name

function genMiddleName(colorType){
    if (colorType === 'red'){
        return 'Crimson';
    } else if (colorType === 'orange'){
        return  'Amber';
    }
    else if (colorType === 'yellow'){
        return 'Soleil';
    }
    else if (colorType === 'green'){
        return 'Emerald';
    }
    else if (colorType === 'blue'){
        return  'Celeste';
    }
    else if (colorType === 'purple'){
        return 'Violet';
    }
    else if (colorType === 'pink'){
        return  'Fuchsia'
    }
    else if (colorType === 'white'){
        return 'Ivory'
    }
    else if (colorType === 'black'){
        return  'Noir'
    }
    else if (colorType === 'brown'){
        return 'Hazel'
    }
    else {
        return `${favoriteColor}stone`
    }
}

// Generate last Name

function genLastName(lastName){
    const lastLetter = lastName.charAt(lastName.length-1).toLowerCase()
    if (lastLetter === 'a'){
        return 'Ashford'
    }
    else if (lastLetter === 'b'){
        return 'Bridgerton'
    }
    else if (lastLetter === 'c'){
        return 'Clarendon'
    }
    else if (lastLetter === 'd'){
        return 'Danbury'
    }
    else if (lastLetter === 'e'){
        return 'Eastwick'
    }
    else if (lastLetter === 'f'){
        return 'Fairchild'
    }
    else if (lastLetter === 'g'){
        return 'Gillingham'
    }
    else if (lastLetter === 'h'){
        return 'Hawthorne'
    }
    else if (lastLetter === 'i'){
        return 'Inglewood'
    }
    else if (lastLetter === 'j'){
        return 'Julington'
    }
    else if (lastLetter === 'k'){
        return 'Kensington'
    }
    else if (lastLetter === 'l'){
        return 'Lovelace'
    }
    else if (lastLetter === 'm'){
        return 'Montgomery'
    }
    else if (lastLetter === 'n'){
        return 'Norwood'
    }
    else if (lastLetter === 'o'){
        return 'Oakhurst'
    }
    else if (lastLetter === 'p'){
        return 'Pembroke'
    }
    else if (lastLetter === 'q'){
        return 'Quintonvale'
    }
    else if (lastLetter === 'r'){
        return 'Ravenshaw'
    }
    else if (lastLetter === 's'){
        return 'Sutherland'
    }
    else if (lastLetter === 't'){
        return 'Tremontford'
    }
    else if (lastLetter === 'u'){
        return 'Underwood'
    }
    else if (lastLetter === 'v'){
        return 'Vanderbilt'
    }
    else if (lastLetter === 'w'){
        return 'Whitmore'
    }
    else if (lastLetter === 'x'){
        return 'Xander'
    }
    else if (lastLetter === 'y'){
        return 'Yardley'
    }
    else if (lastLetter === 'z'){
        return 'Zellhurst'
    }
    else {
        return 'Moon' //Default last name for letters not matched
    }

}

//Generate Suffix 
function genSuffix(streetName){
    return `of the ${streetName} House`
}

//Master Function To Assemble Full Name
function genFullName() {
// Define Variables From Inputs
const firstName = document.getElementById('firstName').value.trim()
const lastName = document.getElementById('lastName').value.trim()
const colorType = document.getElementById('colorType').value.trim()
const titleType = document.getElementById('titleType').value.trim()
const streetName = document.getElementById('streetName').value.trim()
const genderType = document.getElementById('genderType').value.trim()

// Generate Each Part Of The Name Using Helper Functions
const newFirstName = genFirstName(firstName)
const middleName = genMiddleName(colorType)
const newLastName = genLastName(lastName)
const capitalizedSuffix = genSuffix(streetName)
console.log(newFirstName);

// Functions To Capitalize Words
const capitalizedNewFirstName = toCapitalize(newFirstName)
const capitalizedNewMiddleName = toCapitalize(middleName)
const capitalizedNewLastName = toCapitalize(newLastName)
const capitalizedNewTitleType = toCapitalize(titleType)

// Combine All Parts
const fullName = `${capitalizedNewTitleType} ${capitalizedNewFirstName} ${capitalizedNewMiddleName} ${capitalizedNewLastName} ${capitalizedSuffix}`


// display new name
document.getElementById("result").textContent = fullName
}

// Function Capitalizer

function toCapitalize(word){
    console.log(word);
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}