function isSmallerOrEqual(startNumber, endNumber) {
    return startNumber <= endNumber;
    
}

function isInRange(startNumber, endNumber) {
    return startNumber<=1000 &&  startNumber>=1 && endNumber<=1000 &&  endNumber>=1;

}

module.exports = isSmallerOrEqual;
module.exports = isInRange;

