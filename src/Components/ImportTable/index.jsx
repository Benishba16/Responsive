import React from 'react'
import ImportTableHead from '../ImportTableHead'
// import Table from '../Table'
import Table1 from '../Table1'
import "./style.scss"

const column = [
  {
    "displayName": "Person Name",
    "name": "person_name"
  },
  {
    "displayName": "Person Phone",
    "name": "person_phone"
  },
  {
    "displayName": "Person Email",
    "name": "person_email"
  },
  {
    "displayName": "Address",
    "name": "address"
  },
  {
    "displayName": "Title",
    "name": "title"
  },
  {
    "displayName": "Currency",
    "name": "currency"
  },
  {
    "displayName": "Designation",
    "name": "designation"
  },
  {
    "displayName": "Followers",
    "name": "followers"
  },
  {
    "displayName": "Owner",
    "name": "owner"
  },
  // {
  //   "displayName": "Creation Date",
  //   "name": "creation_date"
  // },
  // {
  //   "displayName": "Visible To",
  //   "name": "visible_to"
  // },
  // {
  //   "displayName": "Remarks",
  //   "name": "remarks"
  // },
]

const data = [
  {
    "person_name": "Randy Geidt",
    "person_phone": "+12 2999384",
    "person_email": "randy.geidt@crm.com",
    "address": "28, Bezoz St., CA 2293",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Carter Stanton",
    "person_phone": "+12 2881723",
    "person_email": "carter.stanton@crm.com",
    "address": "19, Aron Col, CA 3483",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Davis Torff",
    "person_phone": "+12 729384122",
    "person_email": "davis.torff@crm.com",
    "address": "199, Canel Avenue, ST 28",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Randy Geidt",
    "person_phone": "+12 2999384",
    "person_email": "randy.geidt@crm.com",
    "address": "28, Bezoz St., CA 2293",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Carter Stanton",
    "person_phone": "+12 2881723",
    "person_email": "carter.stanton@crm.com",
    "address": "19, Aron Col, CA 3483",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Davis Torff",
    "person_phone": "+12 729384122",
    "person_email": "davis.torff@crm.com",
    "address": "199, Canel Avenue, ST 28",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Randy Geidt",
    "person_phone": "+12 2999384",
    "person_email": "randy.geidt@crm.com",
    "address": "28, Bezoz St., CA 2293",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Carter Stanton",
    "person_phone": "+12 2881723",
    "person_email": "carter.stanton@crm.com",
    "address": "19, Aron Col, CA 3483",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Davis Torff",
    "person_phone": "+12 729384122",
    "person_email": "davis.torff@crm.com",
    "address": "199, Canel Avenue, ST 28",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Randy Geidt",
    "person_phone": "+12 2999384",
    "person_email": "randy.geidt@crm.com",
    "address": "28, Bezoz St., CA 2293",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Carter Stanton",
    "person_phone": "+12 2881723",
    "person_email": "carter.stanton@crm.com",
    "address": "19, Aron Col, CA 3483",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
  {
    "person_name": "Davis Torff",
    "person_phone": "+12 729384122",
    "person_email": "davis.torff@crm.com",
    "address": "199, Canel Avenue, ST 28",
    "title": "Title",
    "currency": "Currency",
    "designation": "Designation",
    "followers": "Followers",
    "owner": "Owner",
    "creation_date": "Creation Date",
    "visible_to": "Visible To",
    "remarks": "Remarks"
  },
]

function ImportTable() {
  return (
    <div className='import-table'>
      <div className='import-table--head'>
        <ImportTableHead column={column} data={data}/>
      </div>
      <div>
        <Table1 column={column} data={data}/>
      </div>
    </div>
  )
}

export default ImportTable