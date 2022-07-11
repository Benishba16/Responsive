import React from 'react'
import "./style.scss"

function Dialog1(props) {
  return (
    <section className='dialog1-container'>
        <section className='dialog1-excrete'/>
        <section className='dialog1'>
            <div>{props.children}</div>
        </section>
    </section>
  )
}

export default Dialog1