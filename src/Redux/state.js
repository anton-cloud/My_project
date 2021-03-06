import dialogsReducer from "./dialogs-reducer";
import profileleReducer from "./ptofile-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_POST = "UPDATE-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE = "UPDATE-MESSAGE";

const store = {
  _state: {
    profilePage: {
      postData: [
        {
          id: 1,
          message: "Hello, how are you ?",
          likesCount: 15,
        },
        {
          id: 2,
          message: "It's my first post...",
          likesCount: 15,
        },
      ],
      newPostText: "",
    },

    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Anton",
          photo: "https://www.blast.hk/attachments/64805/",
        },
        {
          id: 2,
          name: "Sasha",
          photo:
            "data:image/jpeg;base64,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",
        },
        {
          id: 3,
          name: "Bob",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZXiLIwZ4MJ4wim5PJAEv-8pjZR6omqL6qFw&usqp=CAU",
        },
      ],

      messagesData: [
        { id: 1, message: "message_1" },
        { id: 2, message: "message_2" },
        { id: 3, message: "message_3" },
      ],
      newMessage: "",
    },
  },
  _calliSubscriber() {
    console.log("state changed");
  },
  updateMessage(text) {
    this._state.dialogsPage.messagesData.newMessage = text;
    this._calliSubscriber(this._state);
  },
  updateNeePostPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._calliSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 4,
      message: this._state.dialogsPage.messagesData.newMessage,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.messagesData.newMessage = "";
    this._calliSubscriber(this._state);
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._calliSubscriber(this._state);
  },
  subscribe(observer) {
    this._calliSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {

    this._state.profilePage = profileleReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);


    this._calliSubscriber(this._state);
  }
}

// =====================================
  //   if (action.type === ADD_POST) {
  //     let newPost = {
  //       id: 3,
  //       message: this._state.profilePage.newPostText,
  //       likesCount: 0,
  //     };
  //     this._state.profilePage.postData.push(newPost);
  //     this._state.profilePage.newPostText = "";
  //     this._calliSubscriber(this._state);
  //   } else if (action.type === UPDATE_POST) {
  //     this._state.profilePage.newPostText = action.newText;
  //     this._calliSubscriber(this._state);
  //   } else if (action.type === ADD_MESSAGE) {
  //     let newMessage = {
  //       id: 4,
  //       message: this._state.dialogsPage.messagesData.newMessage,
  //     };
  //     this._state.dialogsPage.messagesData.push(newMessage);
  //     this._state.dialogsPage.messagesData.newMessage = "";
  //     this._calliSubscriber(this._state);
  //   } else if (action.type === UPDATE_MESSAGE) {
  //     this._state.dialogsPage.messagesData.newMessage = action.newText;
  //     this._calliSubscriber(this._state);
  //   }
  // },





window.state = store;

export default store;
