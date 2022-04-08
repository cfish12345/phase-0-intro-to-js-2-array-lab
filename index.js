// Write your solution here!
const cats = [
    'Milo', 
    'Otis', 
    'Garfield'
];

const destructivelyAppendCat = () => {
    return cats.push('Ralph');
}

const destructivelyPrependCat = () => {
    return cats.unshift('Bob');
}

const destructivelyRemoveLastCat = () => {
    return cats.pop('Garfield');
}

const destructivelyRemoveFirstCat = () => {
    return cats.shift();
}

const appendCat = () => {
    return [...cats, 'Broom'];
}

const prependCat = () => {
    return ['Arnold', ...cats];
}

const removeLastCat = () => {
    return cats.slice(0, 2);
}

const removeFirstCat = () => {
    return cats.slice(-2);
}




