import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

// const { Types, Creators } = createActions({
// })

// export const DummyDataTypes = Types
// export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  countries: [
    {id: 46, name: 'Cambodia'},
    {id: 40, name: 'Indonesia'},
    {id: 42, name: 'Malaysia'},
    {id: 31, name: 'Myanmar'},
    {id: 12, name: 'Philippines'},
    {id: 35, name: 'Singapore'},
    {id: 43, name: 'Thai'},
    {id: 43, name: 'Vietnam'}
  ],
  magazines: [
    {id: 46, name: 'Magazine1'},
    {id: 40, name: 'Magazine2'},
    {id: 42, name: 'Magazine3'},
    {id: 31, name: 'Magazine4'},
    {id: 12, name: 'Magazine5'},
    {id: 35, name: 'Magazine6'},
    {id: 43, name: 'Magazine7'},
    {id: 43, name: 'Magazine8'}
  ]
})

/* ------------- Reducers ------------- */

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {})
