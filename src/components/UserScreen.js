import { StyleSheet, Text, View } from 'react-native';
 
function UserScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.headingStyle}>Venkata Kumar Kondaveti</Text>
      <Text style={styles.textStyle}>He is the Founder of LONGBOW TECHNOLOGIES PRIVATE LIMITED.</Text>
      <Text style={styles.textStyle}>LONGBOW Tech is a Private company incorporated on 02 Dec 2015.</Text>
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
    fontSize: 16,
    color: 'black',
    textAlign: 'Left',
    padding: '20',
  },
  headingStyle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});
export default UserScreen;
