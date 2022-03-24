export default function randomize(lowerBound, upperBound){
    let random = parseInt(Math.random()*(upperBound-lowerBound));

    return lowerBound+random;
}