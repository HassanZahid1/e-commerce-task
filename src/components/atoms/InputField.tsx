import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputFieldProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'numeric';
}

const InputField: React.FC<InputFieldProps> = ({ placeholder, value, onChangeText, keyboardType }) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={styles.input}
      placeholderTextColor={'#000'}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ced4da',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    color: '#000',
  },
});

export default InputField;
