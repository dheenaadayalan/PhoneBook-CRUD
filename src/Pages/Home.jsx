import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Home({setId, setLength}) {
  const [data, sedivata] = useState([]);
  const [deleteData, sediveleteData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => {
    await axios
      .get("https://664350a16c6a656587068a15.mockapi.io/api/data")
      .then((res) => sedivata(res.data))
      .catch((error) => console.log(error));
  };

  const handelDelect = async (id) => {
    if (confirm("Are you sure to delete the contact") == true) {
      await axios
        .delete(`https://664350a16c6a656587068a15.mockapi.io/api/data/${id}`)
        .then((res) => sediveleteData(res.data))
        .catch((err) => console.log(err));
    } else {
      return;
    }
  };

  const handelEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  setLength(data.length);

  return (
    <div className="content">
       <div className="row">
          
          <div className="col"><h6>Pic</h6></div>
          <div className="col"><h6>Name</h6></div>
          <div className="col"><h6>Contacts</h6></div>
          <div className="col"><h6>Address</h6></div>
          <div className="col"><h6>Edit/Delete</h6></div>
        </div>
        
        <div className="row">
        {data.map((element, index) => {
            return (
              <div className="container p-2">
                <div className="row" key={index}>
                <div className="col">
                  {/* <span>{element.id}</span> */}
                  {' '}
                  <img
                    src={element.avatar}
                    className="img-fluid"
                    alt="Avatar"
                  />
                </div>
                <div className="col">
                  <h4>{element.name}</h4>
                  <p>{element.username}</p>
                </div>
                <div className="col">
                  <h6>{element.phone}</h6>
                  <p>{element.email}</p>
                </div>
                <div className="col">
                  <p>{element.address.street}</p>
                  <p>
                    {element.address.suite}, {element.address.city}
                  </p>
                  <p>{element.address.zipcode}</p>
                </div>
                <div className="col">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => {
                        handelEdit(element.id);
                      }}
                    >
                      <i className="fa fa-pencil" aria-hidden="true"></i>
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => {
                        handelDelect(element.id);
                      }}
                    >
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Home;
