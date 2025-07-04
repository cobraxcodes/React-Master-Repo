import React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import { animals } from './src/App'

test('return back array size correctly' , () =>{
   expect(animals).toHaveLength(3)
})