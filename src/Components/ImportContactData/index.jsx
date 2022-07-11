import React from 'react'
import "./style.scss"
import ImportTable from "../ImportTable"
import ImportField from "../ImportField"

function ImportContactData() {
  return (
    <div className='import-contact--data'>
        <ImportTable/>
        <ImportField/>
    </div>
  )
}

export default ImportContactData