const myBirthday = new Date('1990-12-31');
console.log(myBirthday);

const secondBirthday = new Date(1990, 12, 31, 12, 30)
console.log(secondBirthday);

if (myBirthday.getDate() < secondBirthday.getDate()) {
    console.log('Its my real Birthday');
}