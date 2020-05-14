import React from 'react';
import ReactDom from 'react-dom';
import Form from './components/Form';
import './App.css';
import styled from 'styled-components';

const MainHeading = styled.h1`
font-family: Poppins-Bold;
color: #333333;
font-size: 24px;
line-height: center;
text-align: center;
`;

function App() {
  return (
    <div className="App">
      <div className="account-wrap">
        <div className="login-image">
          <img src="" />
        </div>
        <MainHeading>Create an Account</MainHeading>
        <Form />
      </div>
    </div>
  );
}

export default App;
