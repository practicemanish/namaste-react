import React from "react";
class UserClass extends React.Component{
    constructor (props){
        super (props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location : "Default",
            },
          
        };
      
    }
    async componentDidMount() {
       const data = await fetch("https://api.github.com/users/practicemanish");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json,

        });
       
    }
     componentDidUpdate(){
            console.log("Component did update");
        }
        componentWillUnmount(){
            console.log("component will unmount");
        }
        //till 2:05:00
render(){
        const{name , location, avatar_url} = this.state.userInfo;
        console.log(name);
       
         return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center hover:shadow-xl transition">
        <img src={avatar_url} alt ={name} className="w-42 h-42 rounded-full border-4 border-orange-500 shadow-md" />
        <h2 className="mt-4 text-2xl font-bold text-gray-800"> Name: {name}</h2>
            <h3 className="text-gray-600 text-sm mt-1">Location: {location}</h3>
            <h3 className="mt-3 text-sm text-gray-500">📧 Contact:{""}
                <span className="text-orange-700 font-medium">manish@gmail.com</span>
                 </h3>
            <button className="mt-5 px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 active:scale-95 transition">Follow</button>


        </div>
    );
    }
}
export default UserClass;