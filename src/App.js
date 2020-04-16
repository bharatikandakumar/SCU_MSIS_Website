import React from 'react';
import './App.css';
import {Courses} from "./Components/Courses"

function App() {
  //const [courses, setCourses] = useState([])
//  useEffect(() =>{
//    fetch('/csv').then(response => response.json().then(
//    data => {
//    setCourses(data)}
//    ))
//  }, [])
  return (
    <div className="App">
        <Courses />
    </div>
  );
}

export default App;
