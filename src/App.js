// import React from 'react';
// import {SafeAreaView} from 'react-native';
// import RegistrationForm from './Screens/Registration';

// const App = () => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <RegistrationForm />
//     </SafeAreaView>
//   );
// };

// export default App;

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import LoginScreen from './Screens/LoginScreen';
import BottomTabs from './Components/BottomTabs';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!isLoggedIn ? (
            <Stack.Screen name="Login">
              {props => (
                <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Main">
              {props => <BottomTabs {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
