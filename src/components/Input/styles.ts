import styled from 'styled-components';
import image from '../../assets/images/calendar.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    max-width: 412px;
    height: 36px;
    padding-left: 16px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    margin-bottom: 15px;

    &::placeholder {
      color: #cacaca;
    }

    &[type='date'] {
      background: #fff url(${image}) 97% 50% no-repeat;
      background-size: 13px;
      padding-right: 10px;
    }
    &[type='date']::-webkit-inner-spin-button {
      display: none;
    }
    &[type='date']::-webkit-calendar-picker-indicator {
      opacity: 0;
    }
  }
`;
