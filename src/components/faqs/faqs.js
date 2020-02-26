import React from 'react';
import Question from '../question/question';
import Button from '../button/button';

const Faqs = () => {
    return (
        <div className="faqs" id="faqs">
            <h2 className="faqs__title">Frequentl Asked Questions</h2>
            <p className="faqs__description">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
            <ul className="faqs__modal-list">
                <li className="faqs__list-item">
                    <Question 
                        title="What is Bookmark?"
                        copy="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore repudiandae eius perferendis culpa qui aperiam dolore vel praesentium sed. Maxime cumque explicabo iure ratione eligendi saepe nisi dolorem dolores iste?"
                        />
                </li>
            </ul>
            <Button cta="More Info" />
        </div>
    )
}

export default Faqs

