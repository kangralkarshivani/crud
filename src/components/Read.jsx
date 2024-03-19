import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showUser, deleteUser } from "../features/userDetailsSlice";
import CustomModal from "./CustomModal";

const Read = () => {
  const dispatch = useDispatch();
  const { users, loading, searchData } = useSelector((state) => state.app);

  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);
  const [ radioData, setRadioData] = useState()

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading .......</h2>;
  }
  return (
    <div>
      {showModal && (
        <CustomModal
          id={id}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      <h2> All Data</h2>
      <div className="d-flex justify-content-center">
        <input className="form-check-input" name="gender" type="radio" onChange={(e) => setRadioData("")}/>
        <label class="form-check-label mx-2">All</label>

        <input className="form-check-input mx-2" name="gender" value="Male" type="radio" onChange={(e) => setRadioData(e.target.value)}/>
        <label class="form-check-label">Male</label>

        <input className="form-check-input mx-2" name="gender" value="Female" type="radio" onChange={(e) => setRadioData(e.target.value)} />
        <label class="form-check-label">Female</label>
      </div>
      {users &&
        users
          .filter((ele) => {
            if (searchData.length === 0) {
              return ele;
            } else {
              return ele.name.toLowerCase().includes(searchData.toLowerCase());
            }
          }).filter((ele) => {
            if ( radioData === "Male") {
              return ele.gender === radioData
            }else if ( radioData === 'Female') {
              return ele.gender === radioData
            }else return ele
          })
          .map((ele) => (
            <div key={ele.id} className="card w-50 mx-auto my-2">
              <div class="body mx-auto py-4">
                <h5 className="card-title">{ele.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                <p className="card-text">{ele.gender}</p>

                <div className="">
                  <button
                    className="card-link mx-4"
                    onClick={() => [setId(ele.id), setShowModal(true)]}
                  >
                    View
                  </button>
                  <Link to={`/edit/${ele.id}`}>Edit</Link>

                  <Link
                    className="card-link mx-4"
                    onClick={() => dispatch(deleteUser(ele.id))}
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
