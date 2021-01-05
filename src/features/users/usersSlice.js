import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '0', name: 'Kevin Hart' },
  { id: '1', name: 'Brad Pit' },
  { id: '2', name: 'Daniel Craig' }
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
})

export default usersSlice.reducer
