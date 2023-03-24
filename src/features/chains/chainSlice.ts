
import { createSlice } from '@reduxjs/toolkit'
import { Network } from 'alchemy-sdk'

interface initialStateType {
   chain: Network
  }

 const initialState:initialStateType = {
    chain: Network.ETH_MAINNET,
}

export const chainSlice = createSlice({
    name:"chains",
    initialState,
    reducers: {
        getChain: (state,action) =>{
            state.chain = action.payload
        }, 
    }
})

export const { getChain } = chainSlice.actions

export default chainSlice.reducer

