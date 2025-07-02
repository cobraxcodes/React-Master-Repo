import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Example from './Example'

test('renders button with label and responds to click', () =>{
    const handleClick = jest.fn()
    render(<Example label={"Click Me"} onClick={handleClick}/>)
        const button = screen.getByText('Click Me')
        fireEvent.click(button)

        expect(handleClick).toHaveBeenCalledTimes(1)
})

