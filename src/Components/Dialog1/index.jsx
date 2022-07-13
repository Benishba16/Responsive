import React from 'react'
// import ImportContact from '../ImportContact'
import "./style.scss"

function Dialog1(props) {
    const {onClosed} = props
  return (
    <section className={`dialog1-container ${onClosed && 'active'}`}>
        <section className='dialog1-excrete' onClick={props.handleClose} />
        <section className={`dialog1 ${!onClosed && 'hide'}`}>
            <div>
                {props.children}
            </div>
        </section>
    </section>
  )
}

export default Dialog1