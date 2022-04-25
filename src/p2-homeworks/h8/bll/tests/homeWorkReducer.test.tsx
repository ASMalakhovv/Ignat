import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {

    //action
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'up'})

    //expect
    expect(newState[0].name).toBe('Александр')
    expect(newState[1].name).toBe('Виктор')

})
test('sort name down', () => {

    //action
    const newState = homeWorkReducer(initialState, {type: 'sort', payload: 'down'})

    //expect
    expect(newState[0]).toBe(initialState[0])

})
test('check age 18', () => {

    //action
    const newState = homeWorkReducer(initialState, {type: 'check', payload: 18})
    const index = newState.findIndex(e => e.age < 18)

    //expect
    expect(index).toBe(-1)

})
