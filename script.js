// Generate First Name Based on Gender
function genFirstName(firstName, genderType) {
    const firstLetter = firstName.charAt(0).toLowerCase();
    if (genderType === 'boy') {
        switch (firstLetter) {
            case 'a': return 'Anthony';
            case 'b': return 'Benedict';
            case 'c': return 'Colin';
            case 'd': return 'Damien';
            case 'e': return 'Edward';
            case 'f': return 'Frederick';
            case 'g': return 'George';
            case 'h': return 'Henry';
            case 'i': return 'Isaac';
            case 'j': return 'Julian';
            case 'k': return 'Kasper';
            case 'l': return 'Leopold';
            case 'm': return 'Maxwell';
            case 'n': return 'Nicholas';
            case 'o': return 'Oliver';
            case 'p': return 'Philip';
            case 'q': return 'Quentin';
            case 'r': return 'Rufus';
            case 's': return 'Simon';
            case 't': return 'Theodore';
            case 'u': return 'Ulysses';
            case 'v': return 'Vincent';
            case 'w': return 'William';
            case 'x': return 'Xavier';
            case 'y': return 'Yates';
            case 'x': return 'Zachary';
            default: return 'Alex'; // Default name for boys
        }
    } else if (genderType === 'girl') {
        switch (firstLetter) {
            case 'a': return 'Alice';
            case 'b': return 'Bridget';
            case 'c': return 'Charlotte';
            case 'd': return 'Daphne';
            case 'e': return 'Eloise';
            case 'f': return 'Fiona';
            case 'g': return 'Grace';
            case 'h': return 'Hyacinth';
            case 'i': return 'Isabella';
            case 'j': return 'Juliet';
            case 'k': return 'katherine';
            case 'l': return 'Lucinda';
            case 'm': return 'Margaret';
            case 'n': return 'Nadine';
            case 'o': return 'Olivia';
            case 'p': return 'Penelope';
            case 'q': return 'Quinn';
            case 'r': return 'Rosalie';
            case 's': return 'Sophia';
            case 't': return 'Tiana';
            case 'u': return 'Unity';
            case 'v': return 'Violet';
            case 'w': return 'Wiona';
            case 'x': return 'Xina';
            case 'y': return 'Yasmine';
            case 'z': return 'Zara';
            default: return 'Ava'; // Default name for girls
        }
    }
}

// Generate Middle Name Based on Color
function genMiddleName(colorType) {
    switch (colorType) {
        case 'red': return 'Crimson';
        case 'orange': return 'Amber';
        case 'yellow': return 'Soleil';
        case 'green': return 'Emerald';
        case 'blue': return 'Celeste';
        case 'purple': return 'Violet';
        case 'pink': return 'Rose';
        case 'white': return 'Ivory';
        case 'black': return 'Noir';
        case 'brown': return 'Hazel';
        default: return 'Stone';
    }
}

// Generate Last Name Based on Last Letter of Last Name
function genLastName(lastName) {
    const firstLetter = lastName.charAt(lastName.length - 1).toLowerCase();
    switch (firstLetter) {
        case 'a': return 'Ashford';
        case 'b': return 'Bridgerton';
        case 'c': return 'Clarendon';
        case 'd': return 'Darlington';
        case 'e': return 'Ellington';
        case 'f': return 'Featherstone';
        case 'g': return 'Goldsmith';
        case 'h': return 'Hastings';
        case 'i': return 'Iverson';
        case 'j': return 'Jennings';
        case 'k': return 'Kensington';
        case 'l': return 'Lancaster';
        case 'm': return 'Montgomery';
        case 'n': return 'Northfield';
        case 'o': return 'Osbourne';
        case 'p': return 'Patridge';
        case 'q': return 'Quinton';
        case 'r': return 'Ravenswood';
        case 's': return 'Stanhope';
        case 't': return 'Tyndale';
        case 'u': return 'Upton';
        case 'v': return 'Vanstone';
        case 'w': return 'Worthington';
        default: return 'Irvine'; // Default last name for letters not matched
    }
}

// Generate Suffix Based on Street Name
function genSuffix(streetName) {
    return `of the ${streetName} House`;
}

// Generate Full Name
function genFullName() {
    const titleType = document.getElementById("titleType").value;
    const genderType = document.getElementById("genderType").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const colorType = document.getElementById("colorType").value;
    const streetName = document.getElementById("streetName").value;

    if (firstName && lastName) {
        const first = genFirstName(firstName, genderType);
        const middle = genMiddleName(colorType);
        const last = genLastName(lastName);
        const suffix = genSuffix(streetName); // Generate suffix based on street name

        const fullName = `${titleType} ${first} ${middle} ${last} ${suffix}`;
        document.getElementById("result").textContent = fullName;
    } else {
        alert("Please fill in your first and last name.");
    }
}
