import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import {IsAdult} from './src/App'


test('result is truthy', () =>{
    expect(IsAdult(18)).toBeTruthy()
})

test(' result is falsy', () =>{
    expect(IsAdult(12)).toBeFalsy()
})