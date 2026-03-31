import "./ChatWindow.css";
import Chat from "./Chat.jsx";
import { MyContext } from "./MyContext.jsx";

function ChatWindow(){
const{  prompt , setPrompt , reply , setReply } = useContext(MyContext);
const getReply = async () => {
  const options {
    method : "POST",
      headers :{
    "Content-Type" : "application/json"
      },
    body : {
      message : prompt , 
      threadId :
    }
  }
}
  
  return (
    <div className="ChatWindow">
      <div className="navbar">
        <span>SigmaGPT <i className="fa-solid fa-chevron-down"> </i></span>
  <div className="userIconDiv" >
 <span className="userIcon"> <i className="fa-solid fa-user"></i></span>
  </div>
      </div>
      <chat></chat>
      <div className="chatInput">
      <div className="inputBox">
        <input placeholder="Ask Anything"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          >
        </input>
        <div id="submit" onClick={getReply}> <i className="fa-solid fa-paper-plane"></i></div>
      </div>
        <p className="info">
          SigmaGPT Can Make Mistakes. Check Important Info. See Cookie Preferences.
        </p>
      </div>
    </div>
    )
}
export default ChatWindow;
