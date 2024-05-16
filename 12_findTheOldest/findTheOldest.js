const findTheOldest = arr => {
    arr.sort((a,b) => {
        const lastPersonAge = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth
        const nextPersonAge = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth
        return lastPersonAge > nextPersonAge? -1: 1
    });

    return arr[0]

}

// Do not edit below this line
module.exports = findTheOldest;
