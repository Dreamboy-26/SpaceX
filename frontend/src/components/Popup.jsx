import React from "react";

const Popup = ({ data, close }) => {
  const handleClose = () => {
    close(false);
  };

  return (
    <div className="popUp">
      <div className="popUp-inner">
        <div className="close">
          <button onClick={handleClose}>close</button>
        </div>
        <h3>{data.details}</h3>

        <h3>
          <span>Serial: </span>
          {data.capsule_serial}
        </h3>
        <h3>
          <span>id: </span> {data.capsule_id}
        </h3>
        <h3>
          <span>Status: </span>
          {data.status}
        </h3>
        <h3>
          <span>Reuse count:</span>
          {data.reuse_count}
        </h3>
        <h3><span>Type: </span>{data.type}</h3>
      </div>
    </div>
  );
};

export default Popup;
