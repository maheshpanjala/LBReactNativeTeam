import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const LBTextInput = ({value, onChangeText, placeholder}) => (
  <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
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
