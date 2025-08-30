import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super (props);

        this.state ={
            count: 0,
          
        };
        console.log("Child Constructor");
    }
    render(){
        const{name , location} = this.props;
        const {count} = this.state;
        console.log("child Render");
         return (
        <div className="user-card">
            <h1>Class Count:{count}</h1>
            <button onClick={()=>{
               //NEVER UPDATE STATE VARIABLE DIRECTLY
               this.setState({
                count: this.state.count + 1,
               });
            }}>Count Increase</button>
              <button onClick={()=>{
               //NEVER UPDATE STATE VARIABLE DIRECTLY
               this.setState({
                count: this.state.count - 1,
               });
            }}>Count Decrease</button>
           
            <h2> Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact me : manish@gmail.com</h3>


        </div>
    );
    }
}
export default UserClass;