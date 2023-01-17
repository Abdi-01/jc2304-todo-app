// Reducer file for store data state
const INITIAL_STATE = {
    dataTodo: [
        {
            id: 1,
            date: "20-11-2021",
            todo: "Make Todo App",
            location: "https://media.istockphoto.com/photos/protective-face-masks-and-hand-sanitizers-on-the-desks-according-to-picture-id1290836478",
            note: "Prepare VSCode, Node js and CRA, Axios",
            status: "Done"
        },
        {
            id: 2,
            date: "2021-11-26",
            todo: "Berlibur",
            location: "https://pict-b.sindonews.net/dyn/620/pena/news/2021/09/18/156/544508/3-pantai-cantik-di-banten-yang-menarik-buat-plesiran-fuw.jpg",
            note: "Camping",
            status: "on going",
        },
        {
            id: 3,
            date: "2021-11-30",
            todo: "Futsal",
            location: "",
            note: "jam 09.00",
            status: "on going",
        },
        {
            id: 4,
            date: "2021-11-30",
            todo: "Futsal B",
            location: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScxYBCtVC_PCsJHbaTov5uf9tIuu6TLyKcvFUXdFCfoc77ctTDlmcsOnm8n7E-foV5qO8&usqp=CAU",
            note: "jam 16.00",
            status: "on going",
        }
    ]
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