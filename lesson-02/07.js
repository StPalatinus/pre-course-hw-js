let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

let passportMarried2 = JSON.parse(JSON.stringify(passportWithAddress));

passportMarried2.married = true;

console.log(passportMarried.married);
console.log(passportMarried2.married);