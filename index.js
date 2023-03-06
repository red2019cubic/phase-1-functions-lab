// Code your solution in this file!
function distanceFromHqInBlocks(xCoordinate){
    if(xCoordinate >= 42){
        return xCoordinate - 42;
    }else {
        return 42 - xCoordinate;
    }

   
}

function distanceTravelledInFeet(start, destination){
    
    let numberOfBlocks = destination - start;
    if(numberOfBlocks >= 0){
       return numberOfBlocks * 264;
    }else {
        numberOfBlocks = start - destination;
        return numberOfBlocks * 264;
    }
}

function calculatesFarePrice(start, destination){
    let numberOfFeet = distanceTravelledInFeet(start, destination);
    if(numberOfFeet > 0 && numberOfFeet <= 400){
        return 0;
    }else if(numberOfFeet > 400 && numberOfFeet <= 2000){
        let newDistanceInFeet = numberOfFeet - 400;
        return newDistanceInFeet * 0.02;
    }else if(numberOfFeet > 2000 && numberOfFeet <= 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }
    
       
}

function distanceFromHqInFeet(xCoordinate){
    return distanceFromHqInBlocks(xCoordinate) * 264;
    
}