import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    text: 'ready-redux'
}

export const input = createSlice({
    name: 'input',
    initialState,
    reducers: {
        updateText: (state, action) => {
            state.text = action.payload
        },
    }
})

export const { updateText } = input.actions
export default input.reducer