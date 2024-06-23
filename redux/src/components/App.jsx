import React from "react";
import "../css/App.css";
import Counter from "./Counter";
import Posts from "./posts/Posts";
import Asyncthunk from "./Asyncthunk";
import Entityadapter from "./Entityadapter";
function App() {

  return (
    <>
     <Counter />
     <Posts />
     <Asyncthunk />
     <Entityadapter />
    </>
  );
}

export default App;
