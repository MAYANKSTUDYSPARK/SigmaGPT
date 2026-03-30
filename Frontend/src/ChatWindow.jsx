import "./ChatWindow.css";
import Chat from "./Chat.jsx";
function ChatWindow(){
  return (
    <div className="ChatWindow">
      <div className="navbar">
        <span>SigmaGPT <i className="fa-solid fa-chevron-down"> </i></span>
  <div className="userIconDiv" >
 <span> <i className="fa-solid fa-user"></i></span>
  </div>
      </div>
      <chat></chat>
      <div className="chatInput">
      <div className="userInput">
        <input placeholder="Ask Anything">
        </input>
        <div id="submit"> <i className="fa-solid fa-paper-plane"></i></div>
      </div>
        <p className="info">
          SigmaGPT Can Make Mistakes. Check Important Info. See Cookie Preferences.
        </p>
      </div>
    </div>
    )
}
export default ChatWindow;
