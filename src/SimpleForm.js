import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Review from './Review';

class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
          steps={[
            {
              id: '1',
              message: 'What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your gender?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: '7',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            {
              id: '7',
              message: 'Great! Check out your summary',
              trigger: 'review',
            },
            {
              id: 'review',
              component: <Review />,
              asMessage: true,
              trigger: 'update',
            },
            {
              id: 'update',
              message: 'Would you like to update some field?',
              trigger: 'update-question',
            },
            {
              id: 'update-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                { value: 'no', label: 'No', trigger: '10' },
              ],
            },
            {
              id: 'update-yes',
              message: 'What field would you like to update?',
              trigger: 'update-fields',
            },
            {
              id: 'update-fields',
              options: [
                { value: 'name', label: 'Name', trigger: 'update-name' },
                { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                { value: 'age', label: 'Age', trigger: 'update-age' },
              ],
            },
            {
              id: 'update-name',
              update: 'name',
              trigger: '7',
            },
            {
              id: 'update-gender',
              update: 'gender',
              trigger: '7',
            },
            {
              id: 'update-age',
              update: 'age',
              trigger: '7',
            },
            // {
            //   id: 'end-message',
            //   message: 'Thanks! Your data was submitted successfully!',
            //   end: true,
            // },

            {
              id: '10',
              message: 'Do you want to read news about covid-19?',
              trigger: 'news-question'
            },
            {
              id: 'news-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: '11' },
                { value: 'no', label: 'No', trigger: 'no-message' },
              ],
            },
            {
              id: '11',
              message: 'Click on News tab present in the navbar to read daily news about covid-19.',
              trigger: 'no-message'
            },
            {
              id: 'no-message',
              message: 'Want to see anything else?',
              trigger: 'see1-else'
            
            },
            {
              id: 'see1-else',
              options: [
                { value: 'yes', label: 'Yes', trigger: '12' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: '12',
              message: 'Do you want to know about covid hospitals near you?',
              trigger: 'map-question'
            },
            {
              id: 'map-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: '13' },
                { value: 'no', label: 'No', trigger: 'no1-message' },
              ],
            },
            {
              id: '13',
              message: 'Click on Covid Hospitals tab present in the navbar to know about nearby covid hspitals.',
              trigger: 'no1-message'
            },
            {
              id: 'no1-message',
              message: 'Want to see anything else?',
              trigger: 'see-else'
            
            },
            {
              id: 'see-else',
              options: [
                { value: 'yes', label: 'Yes', trigger: '14' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: '14',
              message: 'Want to know the symptoms of covid-19?',
              trigger: 'symp-question'
            },
            {
              id: 'symp-question',
              options: [
                { value: 'yes', label: 'Yes', trigger: '15' },
                { value: 'no', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: '15',
              message: 'Click on Symptoms tab present in the navbar to know symptoms of covid-19.',
              trigger: 'end-message'
            },
            {
                id: 'end-message',
                message: 'Thank You!!',
                end: true,
              },
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;