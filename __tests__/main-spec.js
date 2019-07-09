const isSmallerOrEqual = require('../main').isSmallerOrEqual;
const isInRange = require('../main').isInRange;
const generateSingleMultiplication = require('../main').generateSingleMultiplication;
const generateMultiplicationTable = require('../main').generateMultiplicationTable;
const createMultiplicationTable = require('../main').createMultiplicationTable
//isSmallerOrEqual
it('should return true when startNumber is smaller than endNumber', ()=>{
    expect(isSmallerOrEqual(2, 3)).toBe(true);
})
it('should return true when startNumber is equals than endNumber', ()=>{
    expect(isSmallerOrEqual(2, 2)).toBe(true);
})

it('should return false when startNumber is large than endNumber', ()=>{
    expect(isSmallerOrEqual(3, 2)).toBe(false);
})



//isInRange
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


//generateSingleMultiplication
it('should return 3 x 3 = 9 when startNumber == 3 and endNumber == 3', ()=>{
    expect(generateSingleMultiplication(3, 3)).toBe("3 x 3 = 9");
})

//generateMultiplicationTable
it('should return 2 x 2 = 4 \n2 x 3 = 6 3 x 3 = 9 \n2 x 4 = 8 3 x 4 = 12 4 x 4 = 16 \n when startNumber == 2 and endNumber == 4', ()=>{
    expect(generateMultiplicationTable(2, 4)).toBe("2 x 2 = 4 \n2 x 3 = 6 3 x 3 = 9 \n2 x 4 = 8 3 x 4 = 12 4 x 4 = 16 \n");
})

//createMultiplicationTable
it('should return 2 x 2 = 4 \n2 x 3 = 6 3 x 3 = 9 \n2 x 4 = 8 3 x 4 = 12 4 x 4 = 16 \n when startNumber == 2 and endNumber == 4', ()=>{
    expect(createMultiplicationTable(2, 4)).toBe("2 x 2 = 4 \n2 x 3 = 6 3 x 3 = 9 \n2 x 4 = 8 3 x 4 = 12 4 x 4 = 16 \n");
})

it('should return null when startNumber == 4 and endNumber == 2', ()=>{
    expect(createMultiplicationTable(4, 2)).toBe(null);
})



