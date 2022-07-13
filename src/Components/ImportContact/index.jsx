import React from "react";
import GroupButton from "../GroupButton";
// import ImportContactHeader from "../ImportContactHeader";
// import ImportProgress from "../ImportProgress";
import Close from "../../Assets/images/close";
import "./style.scss";
// import ImportContent from "../ImportContent"
// import ImportProgressMap from "../ImportProgressMap";

function ImportContact(props) {
    const handleClick = (value) => {
        console.log(value);
      };
  return (
    <div className="import-contact--overall">
      {/* ImportContactHeader Component */}
      <div>
        <div className="import-contact-close">
        <div className="import-contact-button--head">

      <div className="import-contact-button">
        <div className="import-contact-button--demo">
        <GroupButton titles={["Import Contacts", "History"]} handleClick={handleClick} />
        </div>
      </div>
      </div>
      <div className="import-contact-close-pic" style={{cursor:"pointer"}} onClick={props.handleCloseDialog}>{Close(24, 24, "#33BC7E")}</div>
      </div>
        {/* ImportProgress Component */}
        {/* <ImportProgressMap/> */}
      </div>
        {/* <ImportContent/> */}
    </div>
  );
}

export default ImportContact;
