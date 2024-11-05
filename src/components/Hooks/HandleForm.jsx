import { useState } from "react";

const HandleForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
        console.log(firstName, lastName)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                 FirstName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>setFirstName(e.target.value)}
                />
               
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  lastName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>setLastName(e.target.value)}

                />
              </div>
            <input type="Submit" className="btn btn-primary" />
             
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default HandleForm;
