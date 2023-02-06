import React, { useState } from "react";
import Create from "./component/Create";
import Show from "./component/Show";

function App() {
  
  const [tasks, settasks] = useState([])

  return(
    <>
    <Create tasks ={tasks} settasks={settasks}></Create>
    <Show tasks ={tasks} settasks={settasks}></Show>
    </>
  )

}
export default App;
