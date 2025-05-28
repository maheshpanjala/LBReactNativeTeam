import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
import ReusableForm from './components/ReusableForm';

const App = () => {
  const handleFormSubmit = ({text, checked}) => {
    Alert.alert('Form Submitted', `Text: ${text}, Checked: ${checked}`);
  };

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <ReusableForm onSubmit={handleFormSubmit} />
    </SafeAreaView>
  );
};

export default App;
