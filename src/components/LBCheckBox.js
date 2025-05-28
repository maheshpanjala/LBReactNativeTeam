import React from 'react';
import CheckBox from 'react-native-check-box';
import { View } from 'react-native';
import styles from '../styles/style';

const LBCheckBox = ({ isChecked, onClick, label }) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        isChecked={isChecked}
        onClick={onClick}
        rightText={label}
        rightTextStyle={styles.checkboxLabel}
        checkBoxColor="#007AFF"
      />
    </View>
  );
};

export default LBCheckBox;
