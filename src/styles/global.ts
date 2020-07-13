import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, html, #root {
    width: 100%;
    background: #fff;
  }
  body {
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased
  }
  .formLabel {
    width: 110px;
    text-align: right;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #4b464b;
    margin-right: 15px;
  }
  body, input, button, label {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
