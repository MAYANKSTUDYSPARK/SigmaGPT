import "./Chat.css";

function Chat({ reply }) {
  return (
    <div className="chatBox">
      {reply ? (
        <div className="reply">{reply}</div>
      ) : (
        <div className="placeholder">Start chatting 🚀</div>
      )}
    </div>
  );
}

export default Chat;
