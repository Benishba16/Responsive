import React from 'react'

function ProgressOn() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_2092_19919)">
    <circle cx="14" cy="12" r="8" fill="white"/>
    <circle cx="14" cy="12" r="8" stroke="#33BC7E" stroke-width="3"/>
    </g>
    <defs>
    <filter id="filter0_d_2092_19919" x="0.5" y="0.5" width="27" height="27" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="2"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2092_19919"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2092_19919" result="shape"/>
    </filter>
    </defs>
    </svg>
  )
}

export default ProgressOn