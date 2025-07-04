// 📝 Challenge 10: Testing Promises
// Create a function fetchData() that returns a Promise resolving to 'success'.
// Test it using resolves to expect 'success'.
import '@testing-library/jest-dom'

const fetchData = async() =>{
   return Promise.resolve('success')
}

test('resolve to success', async () =>{
    await expect(fetchData()).resolves.toBe('success')
})