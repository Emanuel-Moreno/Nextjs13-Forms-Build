import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'cost',
    initialState: {
        plan: 0,
        total: 0,
        adds: [],
        prices: []
        
    },
    
    reducers: {
        addCost: (state, action) =>{
            state.plan = action.payload
        },
        totalAll: (state, action) =>{
            state.total = action.payload
        },
        
        addAdds: (state, action) =>{
            state.adds = action.payload
            
        },
        addPrice: (state, action) =>{
            state.prices = action.payload
            
        },
     
    }
})
export const {addCost, addAdds,  addPrice, totalAll} = Slice.actions  