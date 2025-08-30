import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super (props);

        this.state ={
            count: 0,
            count2 :2,
        };
    }
    render(){
        const{name , location} = this.props;
        const {count,count2} = this.state;
         return (
        <div className="user-card">
            <h1>Class Count:{count}</h1>
            <h1>Class Count2:{count2}</h1>
            <h2> Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact me : manish@gmail.com</h3>


        </div>
    );
    }
};
export default UserClass;