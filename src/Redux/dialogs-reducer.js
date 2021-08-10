const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const dialogsReducer = (state, action) => {

switch (action.type) {
    case ADD_MESSAGE:
        let newMessage = {
        id: 4,
        message: state.messagesData.newMessage,
      };
      state.messagesData.push(newMessage);
      state.messagesData.newMessage = "";
        return state;
    case UPDATE_MESSAGE:
        state.messagesData.newMessage = action.newText;
          return state;
    default:
        return state;
}



    //   if (action.type === ADD_MESSAGE) {
    //   let newMessage = {
    //     id: 4,
    //     message: state.messagesData.newMessage,
    //   };
    //   state.messagesData.push(newMessage);
    //   state.messagesData.newMessage = "";
    
    // } else if (action.type === UPDATE_MESSAGE) {
    //   state.messagesData.newMessage = action.newText;
    // }
    // return state;
}


export const addMessageActionCreate = () => ({
  type: ADD_MESSAGE,
});

export const updateMessageActionCreate = (text) => ({
  type: UPDATE_MESSAGE,
  newText: text,
});

export default dialogsReducer;