import React from "react";

const Popup = ({ data,close }) => {
const handleClose=()=>{
    close(false)
}

  return (
    <div className="popUp">
      <div className="popUp-inner">
        <div className="close">
          <button onClick={handleClose}>close</button>
        </div>
        <h3>{data.status}</h3>
      </div>
    </div>
  );
};

export default Popup;
