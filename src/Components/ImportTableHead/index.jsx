import React from 'react'
import DropDown from '../../Assets/images/dropDown'
import Filter from '../../Assets/images/filter'
import "./style.scss"

function ImportTableHead(props) {
    const {column, data} = props;
  return (
    <div className='import-table-head'>
        <div className='import-table-head1'>
            <div className='import-table-head--filter c-pointer'>{Filter(20, 20)}</div>
            <div className='import-table-head--content'>
                <div className='import-table-head--content---file'>My CRM.xlsx</div>
                <div className='import-table-head--content---page'>
                    <div>Page 1</div>
                    <div className='d-flex align-items-center c-pointer'>{DropDown(16, 16)}</div>
                </div>
            </div>
            </div>
            <div className='import-table-head--value'>
                <div className='import-table-head--value---rows'>Rows : {data.length + 1}</div>
                <div className='import-table-head--value---cols'>Cols : {column.length}</div>
            </div>
        </div>
  )
}

export default ImportTableHead