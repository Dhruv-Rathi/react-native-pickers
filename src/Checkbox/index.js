import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import CheckBox from './base';
import {CheckIcon} from '../icons';

export default function (props) {
  return (
    <CheckBox
      SelectedDataRenderer={SelectedDataRenderer}
      OptionsRenderer={OptionsRenderer}
      SearchRenderer={SearchRenderer}
      style={{...(props.optionsWrapperStyles || {marginVertical: 2})}}
      {...props}
    />
  );
}

const OptionsRenderer = ({value, selected, props}) => {
  const [found, setFound] = useState(false);

  useEffect(() => {
    let localFound = selected.some(current => current.value === value.value);
    setFound(localFound === false ? false : true);
  }, [selected, value.value]);

  return (
    <View>
      {/* <View>
        <TextInput
          id={value.value}
          name={props.name}
          type="checkbox"
          // style={{}}
          checked={found === true}
          onChange={() => {}}
        />
      </View> */}
      <View>
        <CheckIcon />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 12,
          marginBottom: 7,
        }}>
        <Text>{value.label}</Text>
      </View>
    </View>
  );
};

const SearchRenderer = ({query, onSearch, cancelSearch}) => {
  return (
    <View>
      <TextInput
        defaultValue={query}
        placeholder="Type something ..."
        onChange={e => {
          onSearch(e);
        }}
      />
      <Text>
        <Text
          style={{position: 'absolute'}}
          onPress={() => {
            cancelSearch();
          }}>
          {/* <XIcon style={{width: 5, height: 5}} /> */}
        </Text>
      </Text>
    </View>
  );
};

const SelectedDataRenderer = ({selected}) => {
  const [text, setText] = useState('None Selected');
  useEffect(() => {
    if (selected.length > 0) {
      let tempText = selected.map(val => val.label).join('; ');
      setText(tempText);
    } else {
      setText('None Selected');
    }
  }, [selected]);
  return <>{text}</>;
};
