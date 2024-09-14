import emailjs from '@emailjs/browser';
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import "./contact.css";

const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8d7rfcp', 'template_4lbtgof', form.current, {
                publicKey: '6aTj9ZYUAl0KHWxyw',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSent(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className="contact-section">
            <p className="contact-title">Contact Me</p>

            <div className="contact-container">
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            id="fname"
                            name="user_name"
                            placeholder="Enter Your Name.."
                            required
                        />
                        <input
                            type="email"
                            id="lname"
                            name="user_email"
                            placeholder="Enter Your Email Id.."
                            required
                        />
                        <textarea
                            id="subject"
                            name="message"
                            required
                            placeholder="Write your message..."
                            style={{ height: '200px' }}
                        />
                        <input type="submit" value="Send" />
                    </form>
                </div>

                <div className="contact-info-column">
                    <div className="contact-coffee">
                        <FontAwesomeIcon icon={faCoffee} className="coffee-icon" />
                        <span className="coffee-title">Buy me a coffee</span>
                        <span className="coffee-support">Support</span>
                        <span className="coffee-link"><a href="https://buymeacoffee.com/maimayank
">Let's Go</a></span>
                    </div>

                    <div className="contact-email">
                        <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
                        <span className="email-title">Email</span>
                        <span className="email-address">srimayank2002@gmail.com</span>
                        <span className="email-link"><a href="mailto:srimayank2002@gmail.com">Send a message</a></span>
                    </div>
                </div>
            </div>

            {isSent && (
                <div className="popup">
                    <p>Message sent successfully!</p>
                    <button onClick={() => setIsSent(false)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Contact;
