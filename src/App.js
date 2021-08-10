import React from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";

const App = ({
  profilePage,
  dialogsData,
  messagesData,
  // addPost,
  // updateNeePostPost,
  // updateMessage,
  // addMessage,
  dispatch,
}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar dialogsData={dialogsData} />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={profilePage}
                dispatch={dispatch}
                // addPost={addPost}
                // updateNeePostPost={updateNeePostPost}
              />
            )}
          />
          <Route
            exact
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsData={dialogsData}
                messagesData={messagesData}
                dispatch={dispatch}
                // updateMessage={updateMessage}
                // addMessage={addMessage}
              />
            )}
          />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
