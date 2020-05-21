const initialState = [];
let id = 0;

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case "CREATE_POST": {
            return [
                ...state, 
                {
                    liked: false, 
                    caption: "",
                    photo: null,
                    comments: [""],
                    pk: id++,
                }
            ];
        }
        // case "GET_POST": {

        // }
        case "ADD_PHOTO": {
            let copyPost = [...state];
            copyPost.photo = action.photo
            return copyPost;
        }
        case "ADD_CAPTION": {
            let copyPost = [...state];
            copyPost.caption = action.caption
            return copyPost;
        }
        case "SET_LIKED": {
            let copyPost = [...state];
            copyPost.liked = true;
            return copyPost;
        }
        case "ADD_COMMENT": {
            let copyPost = [...state];
            copyPost.comments.push(action.comment);
            return copyPost;
        }
        default: {
            return state;
        }
    }
}

