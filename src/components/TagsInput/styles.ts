import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  align-items: center;
  min-height: 36px;
  width: 100%;
  max-width: 412px;
  padding: 0 8px;
  border: 1px solid #e0e0e0;
  border-radius: 2px;
  &:focus-within {
    border: 1px solid #0052cc;
  }
  input {
    flex: 1;
    border: none;
    height: 36px;
    font-size: 14px;
    &::placeholder {
      color: #cacaca;
    }
    &:focus {
      outline: transparent;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
  }

  li {
    width: auto;
    height: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding: 0 8px;
    font-size: 14px;
    list-style: none;
    border-radius: 6px;
    margin: 0 8px 8px 0;
    background: #0052cc;
    i {
      margin-right: 4px;
      width: 7px;
      height: 7px;
      display: flex;
      cursor: pointer;
      img {
        width: 7px;
      }
    }
  }

  .closeAll {
    filter: brightness(0.5);
    margin-right: 8px;
    cursor: pointer;
    img {
      width: 10px;
    }
  }
`;
