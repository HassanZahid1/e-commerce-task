import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextComponentProps {
  children: React.ReactNode;
  style?: object;
}

const TextComponent: React.FC<TextComponentProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#495057',
  },
});

export default TextComponent;
