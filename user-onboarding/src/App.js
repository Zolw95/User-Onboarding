import React from 'react';
import ReactDom from 'react-dom';
import Form from './components/Form';
import './App.css';
import styled from 'styled-components';
import img from './images/img.png'
import UsersList from './components/UsersList';

/////////////////////////
/// STYLED COMPONENTS ///
/////////////////////////

const BackgroundWrap = styled.div`
background: #fff;
border-radius: 10px;
position: fixed;
top: 50%;
left: 50%;
margin-top: -300px;
margin-left: -600px;
width: 960px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding: 30px 130px 130px 95px;
`;


/////////////////////////
///       FORM        ///
/////////////////////////

function App(props) {
  console.log("app props", props)
  return (
    <div className="App">
      <BackgroundWrap>
        <div className="login-image">
          <img src={img} />
        </div>
        <Form />
      </BackgroundWrap>
    </div>
  );
}

export default App;
