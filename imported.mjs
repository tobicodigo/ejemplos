function logMe(...args) {
    console.log("module")
    console.log(...args)
}

const currentYear = 1990;

export {logMe, currentYear as year }