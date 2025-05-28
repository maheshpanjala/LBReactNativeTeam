import React, { useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';
import LBTextInput from './components/LBTextInput';
import LBButton from './components/LBButton';
import LBCheckBox from './components/LBCheckBox';
import commonStyles from './styles/style';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = () => 
    Alert.alert(
      'Form Submitted', 
      `First Name: ${firstName}\nLast Name: ${lastName}\nUsername: ${username}\nEmail: ${email}`
    );

  return (
    <SafeAreaView style={commonStyles.container}>
      <View style={commonStyles.form}>
        <LBTextInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
        />
        <LBTextInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
        />
        <LBTextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          placeholder="Enter your username"
        />
        <LBTextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
        <LBTextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />
        <LBCheckBox
          isChecked={agree}
          onClick={() => setAgree(!agree)}
          label="I agree to the terms"
        />
        <LBButton
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
