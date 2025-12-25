import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcome to Home Page</h2>
      <Link to="/login">Go to Login</Link>
    </>
  );
};

export default Home;
