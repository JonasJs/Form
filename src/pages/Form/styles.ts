import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const FormGroup = styled.div`
  width: 100%;
  flex: 1;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const FormContainer = styled.form``;

export const FormStepTow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
  @media (max-width: 620px) {
    display: block;
  }
  h1 {
    font-size: 18px;
    margin-right: 16px;
    margin-bottom: 20px;
  }
`;

export const FormHeader = styled.div`
  border: 1px solid #cacaca;
  display: flex;
  align-items: center;

  h3 {
    padding: 0px 10px;
    max-width: 250px;
    width: 100%;
    color: #616161;
    font-size: 14px;
  }
`;

export const Hour = styled.div`
  border-left: 1px solid #cacaca;
  padding: 10px;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 10px 20px;
  border-top: 2px solid #e4eaec;
  .buttons {
    max-width: 1240px;
    margin: 0 auto;
  }
  button {
    padding: 10px 25px;
    cursor: pointer;
    border: 0;
    font-weight: 500;
    color: #fff;
    font-size: 14px;
    margin-right: 10px;
    &.save {
      background: #3999d9;
      border: 1px solid #358dc8;
    }
    &.cancel {
      background: #eeeeee;
      border: 1px solid #dbdbdb;
      color: #616161;
    }
  }
`;
