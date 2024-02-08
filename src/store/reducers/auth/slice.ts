import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../../../@types/models/User"

interface StateProps {
    user: User | null
}

const INITIAL_STATE: StateProps = {
    user: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = { ...action.payload }
        },
        logout: (state) => {
            state.user = null
          },
    }
})
