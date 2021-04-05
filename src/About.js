import React from "react";
import {useRouteMatch} from 'react-router-dom';
const About = () => {
  const match = useRouteMatch('/about/deepak');
   const showButton = match && match.isExact;
  
  return (
    <>
      <div className="setStyle3">
        <h1> About Page </h1>
        <p> Hello How are you</p>
        {showButton ? null :<button onClick={ () => alert('Write deepak in Url (about/deepak)')}>help</button>}
        {showButton && <button onClick={ () => alert('Thankyou for Visiting')}>Click</button>}
      </div>
    </>
  );
};
export default About;