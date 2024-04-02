import React, { useState } from "react";
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";


const Create = () => {
    // Declare state variables outside of JSX
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [regno, setReg] = useState("");
    const history=useNavigate()

  const header={"Access-Control-Allow-Origin":"*"};

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        axios.post("https://66092dda0f324a9a2882dec5.mockapi.io/crud-create",{
            name:name,
            email:email,
            regno:regno,
            header,
        })
        //isse har bar jab data add krenge to display ho payega read wale me isliye is tarah se likha hai
        .then(()=>{
            history("/read");
        });
    };

    return (
        <>
            <div className="d-flex justify-content-between m-2">      
            <h2>Create</h2>
            <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
            </Link>
            </div>  
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="text" 
                        className="form-control"  
                        value={name} // Add value prop to reflect the state
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        value={email} // Add value prop to reflect the state
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Registration Number</label>
                    <input 
                         type="text" 
                         className="form-control"  
                         value={regno} // Add value prop to reflect the state
                         onChange={(e) => setReg(e.target.value)}
                    />
                </div>
               
                <div style={{ marginBottom: '20px' }}></div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    );
}

export default Create;
