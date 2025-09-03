
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
constructor(props){
    super(props);
    console.log("Parent Constructor");

}

    render(){
        console.log("Parent Render");
        return(
        <div>
              <h1>About Class Component</h1>
              <h2>This is about section by manish</h2>
          
              <UserClass name={"manish (class)"} location={"Dehradoon class"} />

        </div>
    );
    }
}



// const About = () => {
//     return(
//         <div>
//               <h1>About</h1>
//               <h2>This is about section by manish</h2>
//               <User name ={"Manish (function)"} />
//               <UserClass name={"manish (class)"} location={"Dehradoon class"} />

//         </div>
//     );
// };
export default About;