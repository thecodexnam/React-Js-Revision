import React from 'react';

const PropsProject = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          style={{
            marginBottom: "40px",
            backgroundColor: "#e5cfcfff",
            padding: "20px",
            borderRadius: "8px",
            height: "700px",
            width: "550px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src={user.img}
            alt={user.name}
            style={{
              width: "500px",
              height: "500px",
              display: "block",
              margin: "20px auto",
              objectFit: "cover"
            }}
          />
          <h2 style={{ textAlign: "center"}}>{user.name}</h2>
          <p><b>Model:</b> {user.model}</p>
          <p><b>Price:</b> {user.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropsProject;
