import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
              <h1>About</h1>
              <h2>This is about section by manish</h2>
              <User name ={"Manish (function)"} />
              <UserClass name={"manish (class)"} location={"Dehradoon class"} />

        </div>
    );
};
export default About;