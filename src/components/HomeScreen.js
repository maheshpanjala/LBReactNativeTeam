import { StyleSheet, Text, View, Button } from 'react-native';
 
function HomeScreen(props) {
  console.log(props);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Longbow Technologies PVT LTD</Text>
      <Text style={styles.textStyle}>Meet our expert Team:</Text>
      <Button
        title="Team Profiles"
        onPress={() => props.navigation.navigate('Profiles',{name:'Venkata kumar  Knodaveti'})}
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
export default HomeScreen;
