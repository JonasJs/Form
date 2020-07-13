import React, { InputHTMLAttributes, useState } from 'react';

import RadioButton from '../RadioButton';

import icoAdd from '../../assets/images/add.png';
import iconClose from '../../assets/images/close.png';

import { Container, Day, ContainerDay, Content, NewInput } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  maxLength?: number;
  type?: string;
  label?: string;
  day?: string;
  getHours?: Function;
  remove?: Function;
}

const FormHour: React.FC<InputProps> = ({
  label,
  day,
  onChange,
  getHours,
  remove,
  ...rest
}) => {
  const [hours, setHours] = useState<any>([
    {
      fullTime: true,
      hourInitial: '',
      finalHour: '',
    },
  ]);
  let inputRef: any = {};

  const [open24Hour, setOpen24Hour] = useState<boolean>(true);

  function addItem() {
    setHours([
      ...hours,
      {
        hourInitial: '',
        finalHour: '',
      },
    ]);
    if (getHours) {
      getHours([...hours], day);
    }
  }

  function removeItem(key: number) {
    const newHours = hours.filter((_: any, index: number) => index !== key);
    setHours(newHours);
    if (remove) {
      remove(key);
    }
  }

  function onChangeButton(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (value === 'Yes') {
      setHours({
        hourInitial: '',
        finalHour: '',
      });
      setOpen24Hour(true);
    } else {
      setOpen24Hour(false);
    }
  }
  function validateInput(e: React.ChangeEvent<HTMLInputElement>, key: number) {
    const { value, name } = e.target;
    const ref = inputRef[`${name}_${key}`];
    if (value.length < 4) {
      ref.error();
    } else if (value.length === 4) {
      const first = value.substr(0, 2);
      const second = value.substr(2, 4);
      const regex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
      const newValue = `${first}:${second}`;

      hours[key] = {
        ...hours[key],
        [name]: newValue,
      };

      setHours([...hours]);

      if (newValue.match(regex)) {
        ref.success();
      } else {
        ref.error();
      }
    }
  }

  function setValue(e: React.ChangeEvent<HTMLInputElement>, key: number) {
    const { value, name } = e.target;
    if (value.length < 5) {
      hours[key] = {
        ...hours[key],
        [name]: value || '',
      };

      setHours([...hours]);
    }
  }
  function setRef(ref: any, key: string) {
    const newValue = {
      ...inputRef,
      [key]: ref,
    };
    inputRef = newValue;
  }

  return (
    <Container>
      <ContainerDay>
        <Day>{day}</Day>
      </ContainerDay>
      <Content>
        <RadioButton
          label="Open 14 Hours*:"
          name={String(day)}
          onChange={onChangeButton}
          options={[
            {
              name: String(`${day}_yes`),
              label: 'Yes',
            },
            {
              name: String(`${day}_no`),
              label: 'No',
            },
          ]}
        />
        {!open24Hour &&
          hours.map((item: any, key: number) => {
            return (
              <div key={key} className="contentInput">
                <NewInput
                  {...rest}
                  value={item.hourInitial}
                  name="hourInitial"
                  placeholder="00:00"
                  onBlur={e => validateInput(e, key)}
                  onChange={e => setValue(e, key)}
                  ref={ref => setRef(ref, `hourInitial_${key}`)}
                />
                <NewInput
                  {...rest}
                  value={item.finalHour}
                  name="finalHour"
                  placeholder="23:59"
                  onBlur={e => validateInput(e, key)}
                  ref={ref => setRef(ref, `finalHour_${key}`)}
                  onChange={e => {
                    setValue(e, key);
                  }}
                />
                {key === 0 ? (
                  <button onClick={() => addItem()}>
                    <img src={icoAdd} alt=""></img>
                  </button>
                ) : (
                  <>
                    <button onClick={() => addItem()}>
                      <img src={icoAdd} alt=""></img>
                    </button>
                    <button onClick={() => removeItem(key)} className="remove">
                      <img src={iconClose} alt=""></img>
                    </button>
                  </>
                )}
              </div>
            );
          })}
      </Content>
    </Container>
  );
};

export default FormHour;
