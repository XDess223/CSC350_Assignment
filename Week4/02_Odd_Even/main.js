class NumberChecker {
    constructor() { 
    }

    // Polymorphic function to check if numbers are odd or even
    checkOddEven(input) {
        // Write function description
        // Check if the input number is Even or Odd
        // Use isNaN for checking if the input is not a number
        // First isNan check if the input is not a number and is not an array
        // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
        
        if (isNaN(input) && !Array.isArray(input)) {
            return "Invalid Input"
        }
        
        if (Array.isArray(input)) {
            let results = [] 
            
            for (let i = 0; i < input.length; i++) {
                if (isNaN(input[i])) {
                    results.push("Invalid Input")
                } 
                else {
                    if (input[i] % 2 === 0) {
                        results.push("Even")
                    } 
                    else {
                        results.push("Odd")
                    }
                }
            }
            return results
        }
         
        if (input % 2 == 0) {
            return "Even"
        }
        else {
            return "Odd"
        }
        
        // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const numberChecker = new NumberChecker();

console.log(numberChecker.checkOddEven(5));
// Expected Output: Odd
console.log(numberChecker.checkOddEven(10));
// Expected Output: Even
console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
// Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
console.log(numberChecker.checkOddEven('Hello'));
// Expected Output: Invalid input