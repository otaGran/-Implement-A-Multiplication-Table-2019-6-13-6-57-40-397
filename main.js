function isSmallerOrEqual(startNumber, endNumber) {
    return startNumber <= endNumber;

}

function isInRange(startNumber, endNumber) {
    return startNumber<=1000 &&  startNumber>=1 && endNumber<=1000 &&  endNumber>=1;

}

function generateSingleMultiplication(factor1, factor2){
    return factor1  + ' x ' + factor2 + ' = ' + factor1*factor2;
}

function generateMultiplicationTable(startNumber, endNumber){
    res = '';
    for(let i = startNumber;i<=endNumber;i++){
        for(let j = startNumber;j<=i;j++){
            res += generateSingleMultiplication(j,i)+' ';
        }
        res += '\n';
    }
    return res;
}

function createMultiplicationTable(startNumber, endNumber){
    if(isSmallerOrEqual(startNumber, endNumber) && isInRange(startNumber, endNumber)){
        return generateMultiplicationTable(startNumber, endNumber);
    }else{
        return null;
    }
}




// module.exports = {
//     isSmallerOrEqual:isSmallerOrEqual,
//     isInRange:isInRange,
//     generateSingleMultiplication:generateSingleMultiplication
// }
exports.isSmallerOrEqual = isSmallerOrEqual
exports.isInRange = isInRange
exports.generateSingleMultiplication = generateSingleMultiplication
exports.generateMultiplicationTable = generateMultiplicationTable
exports.createMultiplicationTable = createMultiplicationTable
