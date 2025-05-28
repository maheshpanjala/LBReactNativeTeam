import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  inputContainer: {
    flex: 0,
    padding: 0,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  inputLabel: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  checkboxContainer: {
    marginVertical: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
});

export default commonStyles;
