import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar bg-dark navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Link to={"/"} className="link">
              <i class="fa fa-book fa-2x" aria-hidden="true"></i> Phone Book
            </Link>
          </a>
          <div >
            <Link to={'/create'}><button className="btn btn-success">Create New Contact</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
