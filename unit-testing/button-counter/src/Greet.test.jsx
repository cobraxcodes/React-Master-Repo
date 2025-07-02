import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Greet from './Greet'

test('renders greeting text correctly', () =>{ // defining test case, and test case name
    render (<Greet/>);
    expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
})
