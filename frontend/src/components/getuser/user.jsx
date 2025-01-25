import React, { useEffect, useState } from "react";
import "./User.css";
import { Link } from "react-router-dom";
import axios from "axios";

const user = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setUsers(response.data);
    };

    fetchDate();
  }, []);

  return (
    <div className="userTable">
      <Link to={"/add"} className="add-button">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  {user.fname} {user.lname}
                </td>
                <td>{user.email}</td>
                <td className="actionButtons">
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={`/edit/:id`}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default user;
