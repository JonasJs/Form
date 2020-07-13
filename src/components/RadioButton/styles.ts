import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 24px 0;

  input[type='radio']:checked,
  input[type='radio']:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  input[type='radio']:checked + label,
  input[type='radio']:not(:checked) + label {
    position: relative;
    padding-left: 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #999898;
  }
  input[type='radio']:checked + label:before,
  input[type='radio']:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid #999898;
    border-radius: 100%;
    background: #fff;
  }
  input[type='radio']:checked + label:after,
  input[type='radio']:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #0075ff;
    position: absolute;
    top: 4px;
    left: 4px;
    border-radius: 100%;
    transition: all 0.2s ease;
  }
  input[type='radio']:checked + label:before {
    border: 1px solid #0075ff;
  }

  input[type='radio']:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }
  input[type='radio']:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
  .InputGroup {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    label {
      margin-left: 8px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
`;
