import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const LBTextInput = ({value, onChangeText, placeholder, name}) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    name={name}
  />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});

export default LBTextInput;
