import styled from 'styled-components';
import Input from '../Input';

export const Container = styled.div`
  display: flex;
  align-items: end;
  border: 1px solid #cacaca;
  @media (max-width: 620px) {
    flex-wrap: wrap;
  }
`;

export const ContainerDay = styled.div`
  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  border-left: 1px solid #cacaca;
  width: 100%;
  padding: 10px 20px;

  .contentInput {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 16px;
    @media (max-width: 620px) {
      flex-wrap: wrap;
    }
  }
  button {
    padding: 8px;
    border: 0;
    background: #007acc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    img {
      width: 10px;
      height: 10px;
    }
  }
  .remove {
    background: #943a38;
  }
`;

export const Day = styled.h3`
  width: 230px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #757575;
  background: #eeeeee;
  border: 1px solid #cacaca;
  border-radius: 2px;
  padding: 10px;
  margin: 10px;
  @media (max-width: 620px) {
    width: auto;
  }
`;

export const NewInput = styled(Input)`
  margin-right: 16px;
  max-width: 310px !important;
`;
