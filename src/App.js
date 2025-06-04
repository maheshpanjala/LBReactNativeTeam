import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import UserScreen from './Components/UserScreen';
 
function App() {
  const Stack = createNativeStackNavigator();
 
  return (
    <NavigationContainer>
     <Stack.Navigator
      initialRouteName="LongBow Tech"
      screenOptions={{
          statusBarColor: 'orange',
          headerStyle: {backgroundColor: 'orange'},
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >
  <Stack.Screen name="LongBow Tech" component={HomeScreen} options={{ }} />
  <Stack.Screen name="Profiles" component={ProfileScreen} />
  <Stack.Screen name="Personal Info" component={UserScreen} />
</Stack.Navigator>
 
    </NavigationContainer>
  );
}

export default App;