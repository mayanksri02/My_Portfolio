import { useState } from 'react';
import './faq.css';

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="content_container">
      <div className="faq_header" onClick={handleClick}>
        <h3>{question}</h3>
        <span className={`open ${isActive ? '' : 'active'}`}>+</span>
        <span className={`close ${isActive ? 'active' : ''}`}>-</span>
      </div>
      <div className={`answer_content ${isActive ? 'active' : ''}`}>
      <p dangerouslySetInnerHTML={{ __html: answer }}></p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: 'Who are you?',
      answer: 'I am a kind and delightful individual hailing from Raebareli 🥰. Currently, I am pursuing my engineering degree and am in my third year of studies.'
    },
    {
      question: 'What do you like to do in your free time',
      answer: 'I enjoy talking to friends and family, listening to music, and sleeping. Occasionally, I also watch Webseries 🤗'
    },
    {
      question: 'Do you have a girlfriend?',
      answer: 'Nhii bhai, I’m not that lucky 🥹. In my opinion, its a natural process, and we shouldn’t feel like "if everyone has it, I should have it too". Sometimes, good things take time, and when it’s Gods will, the right person will come along,But I definitely have a lovely and supportive group of friends.'
    },
    {
      question: 'Share some insightful knowledge.',
      answer: '"Past is past and it will never come again, the Present is the best gift we have in our life bcoz you dont know what`s gonna happen tommorow, so LIVE THE PRESENT !! " we should always be grateful to God for making us human and show respect to everyone we meet. I believe in living every moment and every day with excitement, doing what you love, traveling, and learning because kya pta "kal ho na ho"'
    },
    {
      question: 'My question isn’t listed here. How can I ask it?',
      answer: 'Please visit the contact section of this website and send me your question. I will definitely provide an answer'
    },
  ];

  return (
    <div>
      <div className="faqs_container" id="faq">
        <p className="faq-title">Frequently Asked Questions</p>
        <div className="question_container">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
