import React from "react";
import "../css/App.css";
import Counter from "./Counter";
import Posts from "./posts/Posts";
import Asyncthunk from "./Asyncthunk";
function App() {

  return (
    <>
     {/* <Counter /> */}
     <Posts />
     <Asyncthunk />
    </>
  );
}

export default App;
