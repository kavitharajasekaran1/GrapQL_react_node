import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS_QUERY } from "../Grahql/Queries";

function GetUsers() {
    const { error, loading, data } = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);
    useEffect(() => {
      if (data) {
        setUsers(data.getAllUsers);
      }
    }, [data]);
  
    return (
      <div>
        {/* {" "}
        {users.map((val) => {
          return <h1> {val.firstName}</h1>;
        })} */}
      </div>
    );
  }
  
  export default GetUsers;
