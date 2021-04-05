import React from 'react';
import { useHistory } from "react-router-dom";

const Error = () => {
    let history = useHistory();
    function handleClick() {
        history.push("/");
      }
      return(
          <>
          <h1>Opps Wrong page.</h1>
          <button type="button" onClick={handleClick}>
      Go Home
    </button>
          </>
      )
}

export default Error;