import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Read = () => {
  const [data, setData] = useState([]);


  function getData() {
    axios.get('https://66092dda0f324a9a2882dec5.mockapi.io/crud-create')
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id){
    axios.delete(`https://66092dda0f324a9a2882dec5.mockapi.io/crud-create/${id}`).then(()=>{
      getData()
    });
  };

const setToLocalStorage=(id,name,email,regno)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("regno",regno);
};


  useEffect(() => {
    getData();
  }, []);

  return (
    <>
       <div className="d-flex justify-content-between m-2">      
            <h2>Read Operation</h2>
            <Link to="/">
            <button className="btn btn-secondary">Create</button>
            </Link>
            </div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Registration Number</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>{eachData.regno}</td>
                <td>
                <Link to="/update">
                <button className='btn-success' 
                onClick={()=>
                setToLocalStorage(index + 1,
                  eachData.name,
                  eachData.email,
                  eachData.regno)
                }  >Edit{" "}</button>
                </Link>
                </td>
                <td><button className='btn-danger' onClick={()=>handleDelete(index+1)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ); 
}

export default Read;
