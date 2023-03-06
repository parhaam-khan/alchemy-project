
import { createSlice } from '@reduxjs/toolkit'

 const initialState = {
    addressValue:"",
    searchValue:""
}

export const walletAddressSlice = createSlice({
    name:"walletAddress",
    initialState,
    reducers: {
        getAddress: (state,action) =>{
            state.addressValue = action.payload
        },
        getSearchAddress:(state,action) => {
            state.searchValue = action.payload
        }
    }
   
})

export const { getAddress,getSearchAddress } = walletAddressSlice.actions

export default walletAddressSlice.reducer

