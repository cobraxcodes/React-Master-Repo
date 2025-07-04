// 📝 Challenge 7: .toThrow()
// Write a function divide(a, b) that throws an error if b === 0.
// Test that it throws an error when dividing by zero.

import '@testing-library/jest-dom'

function divide (a,b){
    if(b === 0){
        throw new Error('error')
    }
}

test('throws an error', () =>{
   function test(){
    divide(1,0)
   }
   expect(test).toThrow('error')
})

