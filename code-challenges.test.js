// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


// const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

// const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("fib1", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fib1(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fib1(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

//  FAIL  week-3-assessment-jricks86/code-challenges.test.js
  // ● fib1 › returns an array that length containing the numbers of the Fibonacci sequence

  // ReferenceError: fib1 is not defined

// b) Create the function that makes the test pass.
// input: number
// output: array containing the numbers in Fibonacci sequence
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

function fib1(number) {
  //Declare an array to store the fibonacci sequence
  const fib = [1, 1];
  //For Loop through the sequence until the number is reached
  for (let i = 2; i < number; i++) {
    //Push the current value of the sequence to the end of the array
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  //Return the array
  return fib;
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]
const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


describe("leastToGreat", () => {
  it("return an array of the values sorted from least to greatest", () => {
    expect(leastToGreat(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(leastToGreat(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})
// FAIL  week-3-assessment-jricks86/code-challenges.test.js
// ● leastToGreat › return an array of the values sorted from least to greatest

//   ReferenceError: leastToGreat is not defined

// b) Create the function that makes the test pass.
// input: object
// output: array of the values sorted from least to greatest.
// get an array of values from the object using the object.values method
// sort the array in ascending order using .sort method
  
const leastToGreat = (obj) => {
  const values = Object.values(obj);
  values.sort((a, b) => a - b);
  return values;
}



// console.log(leastToGreat(studyMinutesWeek1)); 
// console.log(leastToGreat(studyMinutesWeek2)); 

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

describe("accumulatingSum", () => {
  it("returns an array of the accumulating sum", () => {
    expect(accumulatingSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(accumulatingSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(accumulatingSum(accountTransactions3)).toEqual([])
  })
})
// FAIL  week-3-assessment-jricks86/code-challenges.test.js
// ● accumulatingSum › returns an array of the accumulating sum

//   ReferenceError: accumulatingSum is not defined

// b) Create the function that makes the test pass.
// input: array
// output: array of the accumulating sum.
// usee the reduce method on the array to add up all the elements in the array and return their cumulative sum.
// take two arguments a and b, and return their sum. The initial value for the accumulation is 0, which is the second argument passed to reduce.


accumulatingSum = (array) => {
  return array.reduce((a, b) => a + b, 0)
}
