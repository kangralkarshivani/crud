import React, { useEffect, useState }  from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../features/userDetailsSlice"; 
import { Link } from "react-router-dom";


const Navbar = () => {
  const allUsers = useSelector((state) => state.app.users)
  const dispatch = useDispatch()
  const [ searchData, setSearchData] = useState("")

  useEffect(() => {
    dispatch(searchUser(searchData))
  },[searchData])

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <h4 className="navbar-brand">CRUD</h4>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Create Post
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/read" className="nav-link">
                  All Post ({allUsers.length})
                </Link>
              </li>

            </ul>
            <input
              className="form-control me-2 w-50"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchData}
              onChange={( e ) => setSearchData(e.target.value)}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;