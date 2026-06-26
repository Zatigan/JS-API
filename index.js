async function getCharacters() {
    // Variable to store api to call
    const url = "https://jsonplaceholder.typicode.com/users";

    // Fetching the URL and store it
    const response = await fetch(url);

    // Handling possible error during the call
    if (!response.ok) {
        throw new Error('Statut de réponse : ${reponse.status}');
    }

    // Converting respose into json
    const allCharacters = await response.json();

    // console.log(allCharacters);

    // Looping over results and display in console.log
    // Uncomment to see the result in terminal

    // for (const oneCharacter of allCharacters) {
    //     console.log("Name: " + oneCharacter.name + ", ");
    //     console.log("Address: " + oneCharacter.address.street + ", ");
    //     console.log("\t " + oneCharacter.address.suite + ", ");
    //     console.log("\t " + oneCharacter.address.zipcode + " " + oneCharacter.address.city);
    //     console.log("===========================================");
    // }

    // Using .map() instead loop forEach
    // allCharacters.map((singleCharacter) => {
    //     console.log("Name: " + singleCharacter.name + ", "),
    //     console.log("Address: " + singleCharacter.address.street + ", "),
    //     console.log("\t " + singleCharacter.address.suite + ", "),
    //     console.log("\t " + singleCharacter.address.zipcode + " " + singleCharacter.address.city),
    //     console.log("===========================================")}
    // );

    return allCharacters;
}

async function getCharactersName() {
    // Variable to store api to call
    const url = "https://jsonplaceholder.typicode.com/users";

    // Fetching the URL and store it
    const response = await fetch(url);

    // Handling possible error during the call
    if (!response.ok) {
        throw new Error('Statut de réponse : ${reponse.status}');
    }

    // Converting response into json
    const allCharacters = await response.json();

    // Creating an empty array to store data
    let charactersName = [];

    // Loop over json and pushing name into the previous array
    for (const oneCharacter of allCharacters) {
        charactersName.push(oneCharacter.name);
    }

    console.log(charactersName);
}

async function findCharacterByEmail(email) {
    // Calling my first function to get datas
    const datas = await getCharacters();

    const characterFound = datas.filter((character) => character.email === email);

    // console.log(characterFound);

    // Looping over results and checking each email with submitted email
    /*     for (const character of datas) {
        if (character.email === email) {
            console.log(character.name);
        }
    } */
}

async function findCharacterByName(name) {
    // Calling my first function to get datas
    const datas = await getCharacters();
    
    // Using Regex taking submitted name as parameter + flags gi for global and case insensitive
    const regex = new RegExp(`(${name})+`, 'gi');

    const characterFound = datas.find((character) => character.name.match(regex));

    console.log(characterFound);

    // Looping over all character and check if name matches the character submitted
    // for (const character of datas) {
    //     const name = character.name;
    //     
    //     if (name.match(regex)) {
    //         console.log(character.name);
    //     }
    // }
}

getCharacters();
getCharactersName();
findCharacterByEmail("Sherwood@rosamond.me");
findCharacterByName("rei");