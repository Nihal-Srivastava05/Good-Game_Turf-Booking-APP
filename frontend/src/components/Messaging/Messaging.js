import React, { useState } from "react";
import "./Messaging.css";
import io from "socket.io-client";
import Chat from "./Chat";
import ChatIcon from "../../pages/images/chatIcon.svg";

const socket = io.connect("http://localhost:3001");

function Messaging() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  const openMessageHandler = () => {
    setIsOpen(true);
  };

  const closeMessageHandler = () => {
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      {!isOpen? (
        <button className="cust-btn message-button" onClick={openMessageHandler}><img src={ChatIcon} alt="Messaging"/></button>
      ) : (
        <div className="outerContainer">
          <div className="App">
            {!showChat ? (
              <div className="joinChatContainer">
                <button className="close-btn" onClick={closeMessageHandler}>&#10006;</button>
                <h3 id="chat-title">Join the Chat</h3>
                <input
                  type="text"
                  placeholder="Name..."
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder="Room ID..."
                  onChange={(event) => {
                    setRoom(event.target.value);
                  }}
                />
                <button id="join-btn" onClick={joinRoom}>Join the Room</button>
              </div>
            ) : (
              <Chat socket={socket} username={username} room={room} onCloseChat={closeMessageHandler}/>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Messaging;
