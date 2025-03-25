import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import homeReducer from './reducers/Homereducer';
import authReducer from './reducers/authSlice'

export const store = configureStore({
    reducer: {
        Home: homeReducer,
        auth: authReducer
    },
})



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create typed hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;