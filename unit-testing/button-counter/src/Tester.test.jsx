import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Greet from './Greet'
import Counter from './Counter'
test('renders greeting text correctly', () =>{ // defining test case, and test case name
    render (<Greet/>); // renders greet component
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument(); // test is to expect that 
    //the "hello world" is to be rendered correctly in the document. ie: component rendered
    //correctly
})
 

test('renders button with count function', () =>{
    render(<Counter/>)
    //verify initial count as 0
    expect(screen.getByText(/counter: 0/i)).toBeInTheDocument()
    // click the button
    const button = screen.getByText(/count with me/i)
    fireEvent.click(button)

    //check after click count should be 1
    expect(screen.getByText(/counter: 1/i)).toBeInTheDocument()
})