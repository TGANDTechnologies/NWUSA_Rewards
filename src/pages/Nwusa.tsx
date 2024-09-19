import React from 'react';
import { Link } from 'react-router-dom';

const Nwusa = () => {
    window.location.href = 'https://www.needweedusa.com';
  return (
    
    <div>
      <h1>Redirecting you to the Need Weed USA Home Page</h1>
      <Link to="/about">Thank you</Link>  {/* Link to the new page */}
    </div>
  );
};

export default Nwusa;
