import React from 'react';
import { useParams, useLocation } from "react-router-dom";

const User = () => {
    const { fname, lname }  = useParams();
    const location = useLocation();

    return (
        <>
    <h1>User {fname} {lname} Page</h1>
    <p>My Current Location is {location.pathname}</p>
    {location.pathname === `/user/deepak/jha` ? (
      <button onClick={ () => alert('This button only visible to you. try to change the Url')}> Click Me </button>) : null}
    </>
    )
}

export default User;