// 📝 Challenge 8: Mock Function Call Count
// Create a Jest mock function.
// Call it twice.
// Test that it was called exactly 2 times using .toHaveBeenCalledTimes(2).

import '@testing-library/jest-dom'

test('mock function', () =>{
    const mockTest = jest.fn()
    mockTest()
    mockTest()
  
    expect(mockTest).toHaveBeenCalledTimes(2)
})
