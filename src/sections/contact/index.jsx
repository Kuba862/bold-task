import './index.css';
import Text from '../../components/text';
import FormInput from '../../components/formInput';
import Heading from '../../components/heading';
import { useRef, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formReady, setFormReady] = useState(false);

  const refs = {
    firstName: useRef(''),
    lastName: useRef(''),
    phoneNumber: useRef(''),
    message: useRef(''),
  };

  const { firstName, lastName, phoneNumber, message } = refs;

  const clearRefs = () => {
    Object.values(refs).forEach((ref) => (ref.current.value = ''));
  };

  const checkFormReady = () => {
    const allIsFilled = Object.values(refs).every(
      (ref) => ref.current.value !== ''
    );
    setFormReady(allIsFilled);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios({
        method: 'post',
        url: 'API URL',
        data: {
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          phoneNumber: phoneNumber.current.value,
          message: message.current.value,
        },
      });
      if (res?.status === 200) {
        clearRefs();
        console.log('your message has been sent!');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="contact">
      <div className="contact_text_container">
        <Heading level={2}>Contact</Heading>
        <Text>
          Questions or concerns? Just fill out the form below and our support
          team will get back to you within 24 hours
        </Text>
      </div>
      <div className="contact_form">
        <form onSubmit={(e) => submitFormHandler(e)}>
          <span className="top_inputs_container">
            <FormInput
              style="half"
              type="text"
              id="first-name-input"
              placeholder="First Name"
              required={true}
              disabled={false}
              ref={firstName}
              onChange={checkFormReady}
              name="first_name"
              className="input"
            />
            <FormInput
              style="half"
              type="text"
              id="last-name-input"
              placeholder="Last Name"
              required={true}
              disabled={false}
              ref={lastName}
              onChange={checkFormReady}
              name="last_name"
              className="input"
            />
          </span>
          <FormInput
            style="full"
            type="number"
            id="phone-number-input"
            placeholder="Phone Number"
            required={true}
            disabled={false}
            ref={phoneNumber}
            onChange={checkFormReady}
            name="phone_number"
            className="input"
          />
          <FormInput
            style="full"
            type="text"
            id="user-message-input"
            placeholder="What Service are you interested in?"
            required={true}
            disabled={false}
            ref={message}
            onChange={checkFormReady}
            name="user_message"
          />
          <button
            disabled={!formReady}
            className={`submit-button ${formReady ? 'active' : ''}`}
          >
            submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
