import React, { useState, KeyboardEvent, useRef } from 'react';

import iconClose from '../../assets/images/close.png';

import { Container, Content } from './styles';

interface TagsInputProps {
  label?: string;
  selectedTags: Function;
}
const TagsInput: React.FC<TagsInputProps> = ({
  label,
  selectedTags,
  ...rest
}) => {
  const [tags, setTags] = useState<string[]>([]);
  const [valueInput, setValueInput] = useState<string>('');
  const tagRef = useRef<any>(null);

  function removeTags(indexToRemove: number) {
    const newTags = tags.filter((item, index) => index !== indexToRemove);
    setTags(newTags);
  }
  function addTags(event: KeyboardEvent<HTMLInputElement>) {
    let { value } = event.target as HTMLInputElement;

    if (event.key === 'Enter' && value !== '') {
      setTags([...tags, value]);
      selectedTags([...tags, value]);
      setValueInput('');
    }
  }
  function OnBlur() {
    if (tags.length > 0) {
      tagRef.current.style.border = '1px solid #4CAF50';
    } else {
      tagRef.current.style.border = '1px solid #FF4717';
    }
  }

  return (
    <Container {...rest}>
      {label && <label className="formLabel">{label}</label>}
      <Content ref={tagRef}>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <i onClick={() => removeTags(index)}>
                <img src={iconClose} alt="close" />
              </i>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Press enter to add tags"
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
          onKeyUp={addTags}
          onBlur={() => OnBlur()}
        />
        {tags.length > 0 && (
          <i className="closeAll" onClick={() => setTags([])}>
            <img src={iconClose} alt="close" />
          </i>
        )}
      </Content>
    </Container>
  );
};

export default TagsInput;
