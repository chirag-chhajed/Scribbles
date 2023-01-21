import "./App.css";
import io from "socket.io-client";
const socket = io("http://localhost:4000");
socket.emit('join_room', { data:crypto.randomUUID()})
socket.on('server',(string)=>console.log(string))

function App() {



  
  return (
    <div className="App">App</div>
  );
}

export default App;