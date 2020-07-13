import React, { useState } from 'react';
import Geocode from 'react-geocode';

// Components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import RadioButton from '../../components/RadioButton';
import ToggleSwitch from '../../components/ToggleSwitch';
import TagsInput from '../../components/TagsInput';
import FormHour from '../../components/FormHour';

// Styles
import {
  Container,
  FormGroup,
  Row,
  FormContainer,
  FormStepTow,
  FormHeader,
  Hour,
  Content,
  Footer,
} from './styles';

interface Infos {
  [key: string]: string | string[];
}
const Form: React.FC = () => {
  const [station, setStation] = useState<Infos>({
    stationName: '',
    stationCode: '',
    stationType: '',
    phone: '',
    latitude: '',
    longitude: '',
    color: [],
    gender: 'Female',
    education: [],
    zipCode: '',
    country: '',
    state: '',
    city: '',
    address: '',
    createdDate: '',
    status: 'false',
  });
  const [hours, setHours] = useState<any>([
    {
      Sunday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Monday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Tuesday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Wednesday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Thursday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Friday: {
        hourInitial: '',
        finalHour: '',
      },
    },
    {
      Saturday: {
        hourInitial: '',
        finalHour: '',
      },
    },
  ]);

  const [selectError, setSelectError] = useState<boolean>(false);

  let inputRef: any = {};

  function selectedTags(tags: string[]) {
    setStation({
      ...station,
      color: tags,
    });
  }
  function setStationDinamy(key: string, value: string) {
    setStation({
      ...station,
      [key]: value,
    });
  }

  function getAdrress() {
    const { zipCode } = station;

    fetch(`http://api.zippopotam.us/US/${zipCode}`)
      .then(res => res.json())
      .then(result => {
        const { country, places } = result;
        /**
         * Being converted to an arrayby object attributes that comes with spaces
         *
         */

        const [
          placeName,
          longitude,
          state,
          stateAbbreviation,
          latitude,
        ] = Object.values(places[0]);
        try {
          Geocode.setApiKey('AIzaSyDrHG4BLGyFyw62vRI50d_M745hKv983FI');
          Geocode.fromLatLng(latitude, longitude).then(response => {
            const address = response.results[0].formatted_address;

            setStation({
              ...station,
              country,
              state,
              city: placeName,
              address,
            });
          });
          inputRef.zipCode.success();
          inputRef.country.success();
          inputRef.state.success();
          inputRef.city.success();
          inputRef.address.success();
        } catch (error) {
          inputRef.zipCode.error();
        }
      })
      .catch(e => {
        inputRef.zipCode.error();
      });
  }
  function validatePhone() {
    const phone = String(station['phone']);

    const match = phone.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      const formated = '(' + match[1] + ') ' + match[2] + '-' + match[3];

      setStationDinamy('phone', formated);
      inputRef.phone.success();
    } else {
      setStationDinamy('phone', phone);
    }
  }

  function handleInputChange(event: any) {
    const target = event.target;
    let value = target.value;
    const name = target.name;
    if (name === 'status' || name === 'education') {
      value = String(target.checked);
    }
    setStationDinamy(name, value);
  }
  function getLocation() {
    try {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        setStation({
          ...station,
          longitude: String(longitude),
          latitude: String(latitude),
        });
      });
      inputRef.latitude.success();
      inputRef.longitude.success();
    } catch (error) {}
  }

  function setValue(key: string) {
    return station[key] || '';
  }

  function setRef(ref: any, key: string) {
    const newValue = {
      ...inputRef,
      [key]: ref,
    };
    inputRef = newValue;
  }

  function isEmpty(name: string) {
    if (station[name] === '') {
      inputRef[name].error();
    } else {
      inputRef[name].success();
    }
  }
  function validateForm(e: React.FocusEvent<HTMLInputElement>) {
    const name = e.target.name;
    isEmpty(name);
  }

  function getHours(getHours: [], day: string) {
    hours.find((item: object, i: number) => {
      const key = Object.keys(item);
      if (key[0] === day) {
        hours[i] = {
          [day]: {
            ...getHours,
          },
        };
        setHours([...hours]);
      }
      return true;
    });
  }

  function handleSubmit(event: any) {
    Object.entries(station).forEach(([key, value]) => {
      if (value === '') {
        if (key === 'stationType') {
          return setSelectError(true);
        }
        alert('Please fill in all items !');
        inputRef[key].error();
      } else {
        console.log(hours);
        console.log(station);
      }
    });
  }

  return (
    <>
      <Header>New Charging Station</Header>
      <Container>
        <FormContainer>
          <Row>
            <FormGroup>
              <Input
                label="Station Name"
                name="stationName"
                placeholder="Station Name"
                onChange={handleInputChange}
                onBlur={validateForm}
                ref={ref => setRef(ref, 'stationName')}
              />
              <Input
                label="Station Code*"
                name="stationCode"
                placeholder="Station Code"
                onChange={handleInputChange}
                onBlur={validateForm}
                ref={ref => setRef(ref, 'stationCode')}
              />

              <Select
                label="Station Type*"
                name="stationType"
                selectError={selectError}
                onChange={({ value }: { value: string }) =>
                  setStationDinamy('stationType', value)
                }
                options={[
                  { value: 'Type One', label: 'Type One' },
                  { value: 'Type Two', label: 'Type Two' },
                  { value: 'Type Three', label: 'Type Three' },
                ]}
              />
              <Input
                label="Latitude*"
                name="latitude"
                value={setValue('latitude')}
                onChange={handleInputChange}
                onBlur={validateForm}
                onFocus={getLocation}
                placeholder="Latitude"
                ref={ref => setRef(ref, 'latitude')}
              />
              <Input
                label="Longitude*"
                name="longitude"
                value={setValue('longitude')}
                onChange={handleInputChange}
                onFocus={getLocation}
                placeholder="longitude"
                ref={ref => setRef(ref, 'longitude')}
              />
              <Input
                label="Phone No"
                name="phone"
                value={setValue('phone')}
                placeholder="Enter a phone with a maximum of 10 digits"
                onChange={e => {
                  const value = e.target.value;
                  if (value.match(/\d+/g) && value.length < 11) {
                    handleInputChange(e);
                  }
                }}
                onFocus={e => {
                  const value = e.target.value.replace(/\D/g, '');
                  setStationDinamy('phone', value);
                }}
                onBlur={() => validatePhone()}
                ref={ref => setRef(ref, 'phone')}
              />
              <TagsInput
                label="Color (Multiple selection)"
                selectedTags={selectedTags}
              />
              <RadioButton
                label="Gender*"
                name="gender"
                onChange={handleInputChange}
                options={[
                  {
                    name: 'Male',
                    label: 'Male',
                  },
                  {
                    name: 'Female',
                    label: 'Female',
                  },
                ]}
              />
              <Checkbox
                label="Education*"
                name="education"
                onChange={handleInputChange}
                options={[
                  {
                    value: 'B.E',
                    label: 'B.E',
                  },
                  {
                    value: 'B. Teach',
                    label: 'B. Teach',
                  },
                  {
                    value: 'M. Tech',
                    label: 'M. Tech',
                  },
                ]}
              />
            </FormGroup>
            <FormGroup>
              <Input
                label="Zip Code"
                name="zipCode"
                placeholder="Zip Code"
                onBlur={() => getAdrress()}
                onChange={handleInputChange}
                ref={ref => setRef(ref, 'zipCode')}
              />
              <Input
                label="Country"
                name="country"
                value={setValue('country')}
                onBlur={validateForm}
                onChange={handleInputChange}
                placeholder="Select Country"
                ref={ref => setRef(ref, 'country')}
              />
              <Input
                label="State"
                name="state"
                value={setValue('state')}
                onBlur={validateForm}
                onChange={handleInputChange}
                placeholder="Select State"
                ref={ref => setRef(ref, 'state')}
              />
              <Input
                label="City"
                name="city"
                value={setValue('city')}
                onBlur={validateForm}
                onChange={handleInputChange}
                placeholder="Select City"
                ref={ref => setRef(ref, 'city')}
              />
              <Input
                label="Address"
                name="address"
                value={setValue('address')}
                onChange={handleInputChange}
                placeholder="Enter Address"
                ref={ref => setRef(ref, 'address')}
              />
              <Input
                type="date"
                label="Created Date"
                name="createdDate"
                onChange={handleInputChange}
                ref={ref => setRef(ref, 'createdDate')}
              />

              <ToggleSwitch
                label="Status"
                name="status"
                onChange={handleInputChange}
              />
            </FormGroup>
          </Row>
        </FormContainer>
      </Container>
      <FormStepTow>
        <h1>Opening Hours</h1>
        <Content>
          <FormHeader>
            <h3>Day</h3>
            <Hour>
              <h3>Open 24 Hours</h3>
            </Hour>
          </FormHeader>
          <FormHour day="Sunday" name="sunday" getHours={getHours}></FormHour>
          <FormHour day="Monday" name="monday" getHours={getHours}></FormHour>
          <FormHour day="Tuesday" name="tuesday" getHours={getHours}></FormHour>
          <FormHour
            day="Wednesday"
            name="wednesday"
            getHours={getHours}
          ></FormHour>
          <FormHour
            day="Thursday"
            name="thursday"
            getHours={getHours}
          ></FormHour>
          <FormHour day="Friday" name="friday" getHours={getHours}></FormHour>
          <FormHour
            day="Saturday"
            name="saturday"
            getHours={getHours}
          ></FormHour>
        </Content>
      </FormStepTow>
      <Footer>
        <div className="buttons">
          <button className="save" onClick={handleSubmit}>
            Save
          </button>
          <button className="cancel">Cancel</button>
        </div>
      </Footer>
    </>
  );
};

export default Form;
