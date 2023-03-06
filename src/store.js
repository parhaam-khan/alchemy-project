import { configureStore } from '@reduxjs/toolkit'
import walletAddressReducer from 'features/walletAddress/walletAddressSlice'

export const store = configureStore({
  reducer: {
    walletAddress:walletAddressReducer
  }
})