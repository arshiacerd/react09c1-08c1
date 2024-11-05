import { useState } from "react";

const FormSubmit = () => {
  const [formData, setFormData] = useState({
    firstName: "",

    lastName: "",
  });
  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    // name:firstName
    // value:arshia
    setFormData((preVData) => ({
      ...preVData,
      [name]: value,
      // [firstName]:arshia
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
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
                  name="firstName"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  lastName
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={handleChange}
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

export default FormSubmit;
