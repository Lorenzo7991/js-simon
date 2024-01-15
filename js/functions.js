console.log('F-JS-OK');

//* Different random numbers functions
const getDifferentRandomNumbers = (min, max, totalNumbers) => {

    const extractedNumbers = [];

    while (extractedNumbers.length < totalNumbers) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!extractedNumbers.includes(randomNumber)) extractedNumbers.push(randomNumber);
    }

    return extractedNumbers;
}