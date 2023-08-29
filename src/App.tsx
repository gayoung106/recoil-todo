import React from "react";
import { useRecoilValue } from "recoil";
import todoItemQuery from "./store/todoItemQuery";

function App() {
  const data = useRecoilValue(todoItemQuery);
  console.log(data);
  return <div>{data.title}</div>;
}

export default App;
