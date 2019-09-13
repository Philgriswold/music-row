const jumpstopRecords = []
const chattenRecords = []
const polarRecords = []

const createBluegrassArtist = (name, genre, age) => {
    return {
        artistName: name,
        artistGenre: genre,
        artistAge: age
    }
}

const createCountryArtist = (name, genre, age) => {
    return {
        artistName: name,
        artistGenre: genre,
        artistAge: age
    }
}

const createRapArtist = (name, genre, age) => {
    return {
        artistName: name,
        artistGenre: genre,
        artistAge: age
    }
}

const createPopArtist = (name, genre, age) => {
    return {
        name: name,
        artistGenre: genre,
        aristAge: age
    }
}

const createFunkArtist = (name, genre, age) => {
    return {
        artistName: name,
        artistGenre: genre,
        artistAge: age
    }
}

jumpstopRecords.push(createFunkArtist("Dre Funkz", "Funk", "25"));
jumpstopRecords.push(createRapArtist("Dusta Grimes", "Rap", "21"));
jumpstopRecords.push(createRapArtist("Loyonce Branis", "Rap", "27"));
chattenRecords.push(createCountryArtist("Bruce Atikins", "Country", "23"));
chattenRecords.push(createCountryArtist("Avilee Dallas", "Country", "19"));
chattenRecords.push(createBluegrassArtist("Bartholomew Danielson", "Bluegrass", "23"));
polarRecords.push(createPopArtist("Jense Brown", "Pop", "20"));
polarRecords.push(createPopArtist("Austin Kincaid", "Pop", "22"));

console.log(jumpstopRecords);
console.log(polarRecords);
console.log(chattenRecords);