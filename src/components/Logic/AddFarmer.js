import React, { useState } from 'react';

import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';

const AddFarmer = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    PhoneNumber: '',
    Address: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    // Make a request to the API using axios
    const url = 'http://localhost:8080/addFarmer';
    const data = {
      name: userDetails.name,
      PhoneNumber: userDetails.phonenumber,
      Address: userDetails.address,
    };
    axios.post(url, data).then((response) => {
      if (response.status === 200) {
        setSuccessMessage('Farmer added successfully');
      } else {
        alert('An error occurred');
      }
    });
  };

  return (
    React.createElement('div', null,
      React.createElement('h2', null, 'ಹೊಸ ರೈತರನ್ನು ಸೇರಿಸಿ'),
      React.createElement('h2', null, 'Add'),
      React.createElement('form', { onSubmit: submitForm, acceptCharset: 'UTF-8' },
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'name', lang: 'kn' }, 'ಹೆಸರು'),
          React.createElement('input', {
            type: 'text',
            id: 'name',
            value: userDetails.name,
            onChange: (e) => setUserDetails({ ...userDetails, name: e.target.value }),
            required: true,
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'phonenumber', lang: 'kn' }, 'ಮೊಬೈಲ್ ನಂಬರ'),
          React.createElement('input', {
            type: 'number',
            id: 'phonenumber',
            value: userDetails.phonenumber,
            onChange: (e) => setUserDetails({ ...userDetails, phonenumber: e.target.value }),
            required: true,
          })
        ),
        React.createElement('div', null,
          React.createElement('label', { htmlFor: 'address', lang: 'kn' }, 'ವಿಳಾಸ'),
          React.createElement('textarea', {
            id: 'address',
            value: userDetails.address,
            onChange: (e) => setUserDetails({ ...userDetails, address: e.target.value }),
            required: true,
          })
        ),
        React.createElement('div', null,
          React.createElement('button', { type: 'submit', lang: 'kn' }, 'ಸಲ್ಲಿಸು')
        ),
        successMessage && (
          React.createElement('div', null,
            React.createElement('p', null, successMessage)
          )
        )
      )
    )
  );
};

export default AddFarmer;
