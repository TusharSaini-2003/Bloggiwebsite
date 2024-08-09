
import './App.css';
import Navbar from "./components/Navbar";
import Lower from "./components/Lower";
import Post1 from "./components/Post1";
import Heading from "./components/Heading";
import Fotter1 from "./components/Fotter1";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Lower/>
    <Heading/>
    <div className='postflex'>
      <Post1/>
      <Post1/>
      <Post1/>
      </div>
      <div className='postflex1'>
      <Post1/>
      <Post1/>
      <Post1/>
      </div>
      <div className='postflex1'>
      <Post1/>
      <Post1/>
      <Post1/>
      </div>
      {/* <div className='postflex1'>
      <Post1></Post1>
      <Post1></Post1>
      <Post1></Post1>
      </div> */}

      <Fotter1></Fotter1>
    </div>
  );
}

export default App;
