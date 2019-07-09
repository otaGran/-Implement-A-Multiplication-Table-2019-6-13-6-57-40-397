function isSmallerOrEqual(startNumber, endNumber) {
    return startNumber <= endNumber;
    
}

function isInRange(startNumber, endNumber) {
    return startNumber<=1000 &&  startNumber>=1 && endNumber<=1000 &&  endNumber>=1;

}

function generateSingleMultiplication(factor1, factor2){
    return factor1  + ' x ' + factor2 + ' = ' + factor1*factor2;
}


// module.exports = {
//     isSmallerOrEqual:isSmallerOrEqual,
//     isInRange:isInRange,
//     generateSingleMultiplication:generateSingleMultiplication
// }
exports.isSmallerOrEqual = isSmallerOrEqual
exports.isInRange = isInRange
exports.generateSingleMultiplication = generateSingleMultiplication
