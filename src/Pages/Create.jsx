import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create({length}) {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    id:length + 1,
    phone:"",
    name: "",
    email: "",
    username: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  });
  const handelChange = (e) => {
    const { name, value } = e.target;

    const nameParts = name.split(".");

    setCreateData((prevData) => {
      if (nameParts.length === 1) {
        return {
          ...prevData,
          [name]: value,
        };
      } else if (nameParts.length === 2) {
        return {
          ...prevData,
          [nameParts[0]]: {
            ...prevData[nameParts[0]],
            [nameParts[1]]: value,
          },
        };
      }
    });
    console.log(createData);
  };

  const handelSubmit = async (e) => {
    console.log('its');
    e.preventDefault();
    await axios
      .post(
        `https://664350a16c6a656587068a15.mockapi.io/api/data/`,
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));

    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col align-self-end card">
          <div className="card-body">
            <form onSubmit={handelSubmit}>
            <div class="mb-3">
                <label for="id" class="form-label">
                  Id
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="id"
                  value={length + 1}
                  onChange={handelChange}
                  disabled
                />
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  value={createData.name}
                  onChange={handelChange}
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  value={createData.phone}
                  onChange={handelChange}
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  aria-describedby="emailHelp"
                  value={createData.email}
                  onChange={handelChange}
                />
              </div>
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  value={createData.username}
                  onChange={handelChange}
                />
              </div>
              <div class="mb-3">
                <label for="street" class="form-label">
                  Street
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="address.street"
                  value={createData.address.street}
                  onChange={handelChange}
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text">Suite and city</span>
                <input
                  type="text"
                  aria-label="First name"
                  class="form-control"
                  name="address.suite"
                  value={createData.address.suite}
                  onChange={handelChange}
                />
                <input
                  type="text"
                  aria-label="Last name"
                  class="form-control"
                  name="address.city"
                  value={createData.address.city}
                  onChange={handelChange}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  ZipCode
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="address.zipcode"
                  value={createData.address.zipcode}
                  onChange={handelChange}
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
