const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
 
 const profileleReducer = (state, action) => {
switch (action.type) {
    case ADD_POST:
           let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0,
        };
        state.postData.push(newPost);
        state.newPostText = "";
        return state;
    case UPDATE_POST:
        state.newPostText = action.newText;
          return state;
    default:
        return state;
}
     
     
    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 3,
    //         message: state.newPostText,
    //         likesCount: 0,
    //     };
    //     state.postData.push(newPost);
    //     state.newPostText = "";

    // } else if (action.type === UPDATE_POST) {
    //     state.newPostText = action.newText;
  

    //     // state.messagesData.push(newMessage);
    //     // state.messagesData.newMessage = "";
    // }
  
    // return state;
}

export const addPostActionCreate = () => ({
  type: ADD_POST,
});

export const updatePostActionCreate = (text) => ({
  type: UPDATE_POST,
  newText: text,
});
 
export default profileleReducer;