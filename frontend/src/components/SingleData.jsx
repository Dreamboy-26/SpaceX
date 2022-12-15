import React from "react";
import { useState } from "react";
import Popup from "./Popup";
const SingleData = ({ data }) => {
  const [popUp, setPopup] = useState(false);

  const handlePopUp = () => {
    setPopup(true);
  };

  return (
    <>
      <div>
        <div className="dataSubContainer" onClick={handlePopUp}>
          <h3>Capsule_id: {data.capsule_id}</h3>
          <h3>{data.capsule_serial}</h3>

          <h3>{data.original_launch}</h3>
          <h3><span>Status: </span>{data.status}</h3>
          <h3>{data.type}</h3>
        </div>
      </div>
      {popUp && <Popup data={data} close={setPopup} />}
    </>
  );
};

export default SingleData;
