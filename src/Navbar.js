import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 style={{
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '8px'
      }}>Gallium</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'black',
          backgroundColor: 'white',
          borderRadius: '8px' 
        }}>Add</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;