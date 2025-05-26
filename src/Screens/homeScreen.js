import React, {useState} from 'react';
import {Alert, Button, Image, SafeAreaView, Text, View} from 'react-native';
import style from '../styles/style';

const HomeScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    //return console.log('Button pressed');
  };

  return (
    <SafeAreaView>
      <View style={{backgroundColor: isDarkMode ? '#222222' : '#ffffff'}}>
        <Text>Hello</Text>

        <Button title="Switch mode" onPress={toggleTheme} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
