import React from 'react'
import ImportContactData from '../ImportContactData'
import ImportContactHeader from "../ImportContactHeader"
import ImportContactProgress from '../ImportContactProgress'
import "./style.scss"

function ImportContentContect(props) {
  return (
    <div>
      <ImportContactHeader {...props}/>
      <ImportContactProgress/>
      <ImportContactData/>
      <div className='import-footer'>
        <div className='import-footer--back'>Back</div>
        <div className='import-footer--next'>Save & Next</div>
      </div>
    </div>
  )
}

export default ImportContentContect