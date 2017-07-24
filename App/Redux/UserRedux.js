import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  addChannel: ['channel']
})

export const UserTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  channels: [
    {id: 46, name: 'TOP'},
    {id: 40, name: 'Event'},
    {id: 42, name: 'Food'},
    {id: 31, name: 'Signtseeing'},
    {id: 12, name: 'Lifestyle'},
    {id: 35, name: 'Shopping'},
    {id: 43, name: 'Career'}
  ]
})

/* ------------- Reducers ------------- */

export const addChannel = (state, { channel }) => {
  return state.merge({ channels: [...state.channels, channel] })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_CHANNEL]: addChannel
})
