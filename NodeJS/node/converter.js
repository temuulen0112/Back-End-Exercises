const args = process.argv.slice(2) 
function Temp() {
    if(args[0].match) {
        
    }
}

function cTemp(celcius) {
    let temp = celcius;
    let cToFahr= temp * 9 / 5 +32;
    let message = temp+ '\xB0C is ' + cToFahr + '\xB0F.'
    console.log(message)
}
cTemp(56)