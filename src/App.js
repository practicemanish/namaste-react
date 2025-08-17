import React from "react";
// import ReactDOM from "react-dom/client"

const elem = <span>React Element</span>

const Title = () => {
  return <h1 className="manu">Hey this is Title component</h1>;
};

// }
const num =10000;
function HeadingComponent() {
  return(
  <div id="container">

    <h2>{num}</h2>
    {elem}

  <h1 className="head">Namaste React by Manish</h1>
  <Title/>
  </div>
  )}


function App() {
  
  return (
    <div>
              <HeadingComponent />
              
    </div>
  ) 
}
export default App;
