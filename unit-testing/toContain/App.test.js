// 📝 Challenge 4: .toContain()
// Create an array const fruits = ['apple', 'banana', 'orange']
// Test if it contains 'banana'.

import '@testing-library/jest-dom'

const fruits = ['apple', 'banana', 'orange']

test('contains banana', () =>{
    expect(fruits).toContain('banana')
})