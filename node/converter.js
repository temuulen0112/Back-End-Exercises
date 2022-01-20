// let grad = 0
// let unit = ''

// const args = process.argv.slice(2) 
// console.log(args[0])
// console.log(args[1])


function cTemp(celcius) {
    let temp = celcius;
    let cToFahr= temp * 9 / 5 +32;
    let message = temp+ '\xB0C is ' + cToFahr + '\xB0F.'
    console.log(message)
}
cTemp(56)