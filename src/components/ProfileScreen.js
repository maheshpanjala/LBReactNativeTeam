import { StyleSheet, Text, View, Button } from 'react-native';
 
function ProfileScreen(props) {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{props.route.params.name}</Text>
       <Button title="Founder" onPress={() => props.navigation.navigate('Personal Info')}
       />
    </View>
  );
}
 
const styles = StyleSheet.create({
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textStyle: {
    fontSize: 28,
    color: 'black',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
export default ProfileScreen;