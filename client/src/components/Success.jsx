import { useState } from "react";

const Success = ({ msg }) => {
  const [ show, setShow ] = useState(true);

  // Remove this component after 2 seconds
  setTimeout(() => setShow(false), 2000);
  
  return (
    <div>
      {show && (
        <div className="p-2 mt-6 mb-4 text-sm text-white bg-green-500 rounded-md">
          <i className="fa-solid fa-circle-check"></i> { msg }
        </div>
      )}
    </div>
  );
};

export default Success;