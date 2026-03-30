import "./Sidebar.css";
function Sidebar() {
  return(
    <section className ="sidebar">    
      <button>  
      <img src="/Frontend/src/assets/file_000000004f1471fa8297f31228302488.png" alt="gpt logo" className="logo"></img>
 <span> <i className="fa-solid fa-pen-to-square"></i></span>
      </button>
    
      <ul className="history">
        <li>history1</li>
        <li>history2</li>
        <li>history3</li>
      </ul>
    
  <div className="sign">
    <p>By ScholarVerse Network &hearts;</p>
  </div>
    </section>
  )
}
export default Sidebar;
