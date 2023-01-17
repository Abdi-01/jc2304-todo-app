// Reducer file for store data state
const INITIAL_STATE = {
    dataTodo: []
};

export const todoReducer = (state = INITIAL_STATE, action) => {
    // parameter action akan menerima 2 property, yaitu type dan payload
    // type : untuk memilih data mana yang mau diperbarui
    // payload : berisi data yang akan disimpan
    console.log("Data dari action", action);
    switch (action.type) {
        case "UPDATE_TODO":
            // memeprbarui data pada state dengan data yang dikirim oleh action.payload
            return { ...state, dataTodo: action.payload }
        case "RESET_TODO":
            return { ...state, dataTodo: [] }
        default:
            return state;
    }
}