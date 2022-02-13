const sayHi = (name) => {
    console.log("Hi " + name)
}

function addValues(){
    console.log(5 + 7)
}

addValues()

module.exports = {sayHi, addValues}