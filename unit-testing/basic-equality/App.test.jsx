import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './src/App'

test('string is true', () =>{
    render(<App/>)
    const string = screen.getByText(/cobra/i)
    expect(string).toBeTruthy()
})

test('element renders correctly', () =>{
    render(<App/>)
    expect(screen.getByText(/hi! my name is cobra/i)).toBeInTheDocument()
})