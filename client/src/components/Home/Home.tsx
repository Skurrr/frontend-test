import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <header className="Home-header">
        <p>Welcome</p>
      </header>
      <nav>
        <Link to="/users">Users</Link> |{" "}
      </nav>
    </div>
  );
};

export default Home;
