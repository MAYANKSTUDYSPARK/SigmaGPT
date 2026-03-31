import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext.jsx";

function Chat() {
  const { newChat } = useContext(MyContext);
  return (
    <>
      {newChat && <h1> Start a New Chat!! </h1>}
    <div className="chats">
    </div>
    </>
  );
}

export default Chat;
