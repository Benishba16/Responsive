import React from 'react'
import Next from '../../Assets/images/next'
import ProgessComplete from '../../Assets/images/progesscomplete'
import ProgressOn from "../../Assets/images/progresson"
import ProgressOff from '../../Assets/images/progessoff'
import "./style.scss"

const data = [
  {
    progess: ProgessComplete(),
    activeClassName: "complete",
    text: "Upload File",
    next: Next(),
    exact: true,
  },
  {
    progess: ProgressOn(),
    activeClassName: "map",
    text: "Mapping",
    next: Next(),
    exact: true,
  },
  {
    progess: ProgressOff("rgba(0, 0, 0, 0.6)"),
    activeClassName: "notyet",
    text: "Preview & Finish",
    next: Next(),
    exact: true,
  },
]

function ImportContactProgress() {
  return (
    <div className='import-progress'>
      <div className='import-progress--content'>
        <div className='d-flex import-data'>
          {data.map(datas => 
          <div className={`import-data--content ${datas.exact && datas.activeClassName}`}>
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