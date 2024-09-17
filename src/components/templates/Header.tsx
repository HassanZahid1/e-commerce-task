/* eslint-disable react-native/no-inline-styles */
// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: '#007bff' },
      ]}
    >
      <Text
        style={[
          styles.headerText,
          { color: '#fff' },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
