import React from 'react'

export default function index({ isSmall, isBasic }) {
    return (
        <div className={isSmall ? `py-2` : isBasic ? `py-4` : `py-2`}></div>
    )
}
