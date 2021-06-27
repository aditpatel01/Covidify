import React from 'react'
import symp from '../images/symptoms.JPG'
//import symptoms from './symptoms'
import './symptoms.css';
export default function symptoms1() {
    return (
        <div>
            <div class="imagebox">
            <img src={symp} class="center" alt="symptoms"></img>
            </div>
            <div class="textbox">
            <h3>Most common symptoms:</h3>
            <ul>
                <li>fever</li>
                <li>dry cough</li>
                <li>tiredness</li>
            </ul>
            <h3>Less common symptoms:</h3>
            <ul>
                <li>Aches and pains</li>
                <li>Sore throat</li>
                <li>Diarrhoea</li>
                <li>Conjunctivitis</li>
                <li>Headache</li>
                <li>Loss of taste or smell</li>
                <li>A rash on skin, or discolouration of fingers or toes</li>
            </ul>
            <h3>Serious symptoms:</h3>
            <ul>
                <li>Chest pain or pressure</li>
                <li>Loss of speech or movement</li>
            </ul>
            </div>
        </div>

    )
}