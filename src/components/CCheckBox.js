import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
 
const CCheckbox = ({ label, checked, onToggle }) => (
  <TouchableOpacity onPress={onToggle} style={styles.container}>
    <Checkbox status={checked ? 'checked' : 'unchecked'} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);
 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    marginLeft: 8,
  },
});
 
export default CCheckbox;
 