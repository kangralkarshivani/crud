import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailsSlice";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.app.users);
  const [updateData, setUpdateData] = useState();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      const singleUsers = users.filter((ele) => ele.id === id);
      setUpdateData(singleUsers[0]);
    }
  }, []);

  const newData = (e) => {
    console.log('e', e.target.value);
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };


  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData))
    navigate('/read')
  }

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleUpdate}>
        <h2 className="py-2">update the data</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={updateData && updateData.name}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={updateData && updateData.email}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            name="age"
            className="form-control"
            value={updateData && updateData.age}
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label px-2">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label px-2">Female</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Update;
