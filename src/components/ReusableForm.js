import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import LBTextInput from './LBTextInput';
import CCheckbox from './CCheckbox';
 
const ReusableForm = ({
  onSubmit,
  textPlaceholder = 'Enter something',
  checkboxLabel = 'I agree',
  buttonLabel = 'Submit',
}) => {
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);
 
  const handleSubmit = () => {
    onSubmit({ text, checked });
  };
 
  return (
    <View style={styles.container}>
      <LBTextInput
        value={text}
        onChangeText={setText}
        placeholder={textPlaceholder}
      />
 
      <CCheckbox
        checked={checked}
        onToggle={() => setChecked(!checked)}
        label={checkboxLabel}
      />
 
      <Button mode="contained" onPress={handleSubmit} disabled={!checked}>
        {buttonLabel}
      </Button>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation:  2,
  },
});
 
export default ReusableForm;
 