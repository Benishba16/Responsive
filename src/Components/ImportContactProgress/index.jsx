import React from 'react'
import Next from '../../Assets/images/next'
import ProgessComplete from '../../Assets/images/progesscomplete'
import "./style.scss"

const data = [
  {
    progess: ProgessComplete(),
    text: "Upload File",
    next: Next(),
  },
  {
    progess: ProgessComplete(),
    text: "Mapping",
    next: Next(),
  },
  {
    progess: ProgessComplete(),
    text: "Preview & Finish",
    next: Next(),
  },
]

function ImportContactProgress() {
  return (
    <div className='import-progress'>
      <div className='import-progress--content'>
        <div className='d-flex import-data'>
          {data.map(datas => 
          <div className='import-data--content'>
            <div className='import-data--content1'>
              <div className='import-data--content1--progress d-flex'>{datas.progess}</div>
              <div className='import-data--content1--text'>{datas.text}</div>
            </div>
            <div className='import-data--content2--next'>{datas.next}</div>
          </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ImportContactProgress