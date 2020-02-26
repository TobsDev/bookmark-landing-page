import React from 'react';

const Question = (props) => (
    <div className="question">
        <h3 className="question__title">{props.title}</h3>
        <img src="" alt="" className="question__arrow question__active"/>
        <p className="question__copy">{props.copy}</p>
    </div>
)

export default Question