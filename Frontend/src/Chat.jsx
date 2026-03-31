import "./Chat.css";
import { useContext } from "react";
import { MyContext } from "./MyContext.jsx";

function Chat() {
  const { newChat , prevChats } = useContext(MyContext);
  return (
    <>
      {newChat && <h1> Start a New Chat!! </h1>}
    <div className ="chats">
      <div className ="userDiv" >
      <p className ="userMessage">user message</p>
      </div>
      <div className="gptDiv">
      <p className ="gptMessage">gpt generated message  </p>
      </div>
    </div>
    </>
  );
}

export default Chat;
