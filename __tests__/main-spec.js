const isSmallerOrEqual = require('../main').isSmallerOrEqual
const isInRange = require('../main').isInRange
const generateSingleMultiplication = require('../main').generateSingleMultiplication
it('should return true when startNumber is smaller than endNumber', ()=>{
    expect(isSmallerOrEqual(2, 3)).toBe(true);
})
it('should return true when startNumber is equals than endNumber', ()=>{
    expect(isSmallerOrEqual(2, 2)).toBe(true);
})

it('should return false when startNumber is large than endNumber', ()=>{
    expect(isSmallerOrEqual(3, 2)).toBe(false);
})

it('should return true when startNumber and endNumber are between 1, 1000', ()=>{
    expect(isInRange(2, 3)).toBe(true);
})

it('should return false when startNumber is large than 1000', ()=>{
    expect(isInRange(1001, 2)).toBe(false);
})

it('should return false when endNumber is smaller than 1', ()=>{
    expect(isInRange(0, 2)).toBe(false);
})
it('should return false when startNumber is arge than 1000', ()=>{
    expect(isInRange(2, 1001)).toBe(false);
})
it('should return false when startNumber is smaller than 1', ()=>{
    expect(isInRange(2, 0)).toBe(false);
})