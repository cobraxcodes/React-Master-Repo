// 📝 Challenge 6: beforeEach() Reset
// Declare let counter = 0.
// In a beforeEach, reset counter = 0.
// In one test, increment counter and check it’s 1.
// In another test, confirm it resets to 0.

import '@testing-library/jest-dom'

let counter;

beforeEach(() =>{
    counter = 0
})

test('counter increments by 1', () =>{
    counter++
    expect(counter).toBe(1) // use to be for value expectations
})

test('counter reset to 0', ()=>{
    expect(counter).toBe(0)
})

test('counter decrements by 1', () =>{
    counter--
    expect(counter).toBe(-1)
})