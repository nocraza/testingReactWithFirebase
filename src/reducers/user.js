const INITIAL_STATE = {
    users: null
}

const applySetUsers = (state, action) => ({
    ...state, 
    users: action.users
})

const applySetUser = (state, action) => ({
    ...state,
    users: {
        ...state.usres,
        [action.uid]: action.user
    }
})

const userReducer = (state, action) => {
    switch (action.type) {
        case 'USERS_SET':
            return applySetUsers(state, action)
        case 'USER_SET':
            return applySetUser(state, action)
        default:
            return state
    }
}

return default userReducer