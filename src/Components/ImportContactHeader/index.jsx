import React from 'react'
import Close from '../../Assets/images/close'
import GroupButton from "../GroupButton"
import "./style.scss"

function ImportContactHeader(props) { 

  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <div className='import-header'>
      <div className='import-header--tab'>
        <GroupButton titles={["Import Contacts", "History"]} handleClick={handleClick} />
      </div>
      <div className='c-pointer import-header--close' onClick={props.handleCloseDialog}>{Close(24, 24, '#33BC7E')}</div>
    </div>
  )
}

export default ImportContactHeader