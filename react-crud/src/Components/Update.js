import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate } from 'react-router-dom';

export const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [regno, setReg] = useState(" ");

  const navigate=useNavigate();

  useEffect(() => {
    
   setId(localStorage.getItem("id"));
   setName(localStorage.getItem("name"));
   setEmail(localStorage.getItem("email"));
   setReg(localStorage.getItem("regno"));

  }, [])
  
  const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put(`https://66092dda0f324a9a2882dec5.mockapi.io/crud-create/${id}`,{
    name:name,
    email:email,
    regno:regno,
  
   }).then(()=>{
      navigate("/read");
   });
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Registration Number</label>
          <input
            type="text"
            className="form-control"
            value={regno}
            onChange={(e) => setReg(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: '20px' }}></div>
        <button type="submit" className="btn btn-primary mx-2"
        onClick={handleUpdate}
        >
          Update
        </button>
         <Link to="/read">
        <button className="btn btn-secondary mx-2" >
          Back
        </button>
        </Link>
      </form>
    </>
  );
};

export default Update;