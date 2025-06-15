// src/Home.js
import { Link } from "react-router-dom";
import './Home.css';
function Home() {
  return (
  <div className="home" style={{fontFamily:'revert'}}>
     <h1>Welcome to Our Hotel</h1>
     <p> We are dedicated to providing the best services to our customers. Learn more about our mission, values, and team. </p> 
     <Link to="/about" className="btn btn-outline-success" > About Us </Link> 
     <Link to="/rooms" className="btn btn-outline-success"> View Rooms </Link> 
     <Link to="/contact" className="btn btn-outline-success"> Contact Us </Link>
  </div> )}
export default Home;
