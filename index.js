const cats = ["Milo", "Otis", "Garfield"]; 
function destructivelyAppendCat(name){
    cats.push(name)
    return cats
}
   
function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat(){
    cats.pop(name)
    return cats
}
function destructivelyRemoveFirstCat(){
    cats.shift(name)
    return cats
}
function appendCat(name){
    var appendCat = cats.concat(name)
    cats.concat(name)
    return appendCat
}
function prependCat(name){
    const prependCat = [name, ...cats]
    return prependCat
}
function removeLastCat(name) {
    const removeLastCat = cats.slice()
    removeLastCat.pop()
    return removeLastCat
}
function removeFirstCat(name) {
    const removeFirstCat = cats.slice()
    removeFirstCat.shift()
    return removeFirstCat
}

