import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 15px;

  input[type='checkbox'] {
    position: relative;
    width: 20px;
    height: 20px;
    color: #999898;
    border: 1px solid #999898;
    border-radius: 4px;
    appearance: none;
    cursor: pointer;
    transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);

    &::before {
      position: absolute;
      content: '';
      display: block;
      top: 2px;
      left: 6px;
      width: 4px;
      height: 10px;
      border-style: solid;
      border-color: #fff;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    &:checked {
      color: #fff;
      border-color: #0075ff;
      background: #0075ff;
      &::before {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: #999898;
    margin-left: 5px;
  }
`;
