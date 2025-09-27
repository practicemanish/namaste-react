import UserClass from './UserClass';
import {Component} from 'react';

class About extends Component {
  constructor (props) {
    super (props);
    console.log ('Parent Constructor');
  }

  render () {
    return (
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-gradient-to-r from-orange-50 to-white rounded-2xl shadow-lg text-center">
        <h1 className="text-3xl font-extrabold text-orange-600 ">
          About Class Component
        </h1>
        <h2 className="mt-2 text-gray-700 text-lg font-medium">
          This is about section by manish
        </h2>
        <div className="mt-6">
          <UserClass name={'manish (class)'} location={'Dehradoon class'} />
        </div>
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
