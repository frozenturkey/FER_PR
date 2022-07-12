import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'reactstrap';

const DashboardComponent = (props) => {
  return (
    <Navbar expand="md">
      <div className="container">
        <div className="row w-100 d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-start">
          <h3>CATEGORIES</h3>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/lighting">
                Lighting
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/bedding">
                Bedding
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/bathshower">
                Bath & Shower
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </Navbar>
  );
};

export default DashboardComponent;
