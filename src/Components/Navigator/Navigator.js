import "./Navigator.css";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <div className="navigator">
      <NavLink id="button" exact to={"/form"} activeClassName="active">
        Form
      </NavLink>
      <NavLink id="button" exact to={"/formDetails"} activeClassName="active">
        Form Details
      </NavLink>
    </div>
  );
}

export default Navigator;
