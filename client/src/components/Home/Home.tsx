import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="Home">
      <header className="Home-header">
        <p>Welcome</p>
        <Button
          onClick={() => {
            navigate(`/users`);
          }}
          variant="text"
        >
          Go to users page
        </Button>
      </header>
    </div>
  );
};

export default Home;
