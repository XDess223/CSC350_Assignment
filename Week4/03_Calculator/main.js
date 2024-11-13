class SimpleCalculator {
    constructor() { }

    // Polymorphic function to perform arithmetic calculations
    calculate(operation, num1, num2) {
        // Write function description 
        // Check if num1 or num2 is not a number
        // declare result = 0
        // Create if statement for each operation
        // For divide add if else statement for checking num2 = 0
        // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

        if (isNaN(num1) || isNaN(num2)){
            return "Invalid input: num1 and num2 must be numbers"
        }

        let result = 0;

        if (operation == 'add') {
            result = num1 + num2;
        }
        else if (operation == 'subtract') {
            result = num1 - num2;
        }
        else if (operation == 'multiply') {
            result = num1 * num2;
        }
        else if (operation == 'modulus') {
            result = num1 % num2
        }
        else if (operation == 'divide'){
            if (num2 == 0) {
                return "Cannot divide by zero"
            }
            else {
                result = num1 / num2
            }
        }

        return Math.floor(result);
            
        // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const calculator = new SimpleCalculator();

console.log(calculator.calculate('add', 5, 3));       
// Expected Output: 8
console.log(calculator.calculate('subtract', 10, 4)); 
// Expected Output: 6
console.log(calculator.calculate('multiply', 6, 7));  
// Expected Output: 42
console.log(calculator.calculate('divide', 8, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 9, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 8, 0));    
// Expected Output: Cannot divide by zero
console.log(calculator.calculate('modulus', 8, 3));       
// Expected Output: 2
console.log(calculator.calculate('add', 5, 'three')); 
// Expected Output: Invalid input: num1 and num2 must be numbers 