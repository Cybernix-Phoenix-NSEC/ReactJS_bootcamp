import {useState, useEffect} from "react";
import './App.css';
import axios from "axios";
import FetchComponent from "./components/FetchComponent";
import DisplayData from "./components/DisplayData";

function App() {
  // var a = 7
  // let b = 10
  const [value, setValue] = useState(10);
  // const [change, setChange] = useState(1);

  useEffect(() => {
    setValue(1);
  }, [])

  const [info, setInfo] = useState([
    {name: "Alex", age: 20},
    {name: "Bob", age: 100}
  ])

  console.log(value);


  return (
    <div>
      Hello World! {value}

      <FetchComponent />

      {info.map(each => {
        return (
          <DisplayData name={each.name} age={each.age} />
        )
      })}

    </div>
  );
}

export default App;
