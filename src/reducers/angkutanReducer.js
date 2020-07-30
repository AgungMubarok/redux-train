const initialState = {
    barangInti: 50
}

export const angkutanReducer = (state = initialState, action) => {
    if(action.type === "TAMBAH_BARANG") {
        const newState = {
            barangInti: state.barangInti + 1
        }
        return newState
    } else if(action.type === "KURANGI_BARANG"){
        if(state.barangInti > 0) {
            const newState = {
                barangInti: state.barangInti -1
            }
            return newState
        }
        
    }
    return state
}