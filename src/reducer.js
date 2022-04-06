export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 
    // "BQDwVMlNB3RYnxvTDReDzG0hdtkw-v6EdLN9DqWt2OCBsEpkBf44DdFRybWjTCEIuqW0qcpIpj4dYFuJ_d6nvs4Oc6Ni4QjtoQFKW8ZxpaOi8iJjaLavJTy3p_8g_Mb_KfKjRL8RMlXYdeGi0w9R_5958DtxQEIW96uwbRyWMJ-Dg7hr",
};

const reducer = (state, action) => {

    console.log(action);
// Action -> type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state, 
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        default: 
        return state;
    }
};

export default reducer;