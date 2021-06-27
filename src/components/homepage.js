import React from 'react'
import homestay from '../images/stayhome.jpg'
import cov from '../images/cov.jpg'

export default function homepage() {
    return (
        <div className="img-parent">
            <img className="homestay" src={homestay} alt="homestay"></img>
            <img className="img-cov" src={cov} alt="cov"></img>
        </div>
    )
}
