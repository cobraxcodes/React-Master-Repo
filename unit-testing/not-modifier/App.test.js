// 📝 Challenge 9: .not Modifier
// Create a test to check that 5 + 5 is not equal to 11 using .not.toBe(11).

import '@testing-library/jest-dom'

test('does not equal to 11', () =>{
    let math = 5 + 5
    expect(math).not.toBe(11)
})