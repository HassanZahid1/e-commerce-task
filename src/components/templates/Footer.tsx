// components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer: React.FC = () => {

  return (
    <View
      style={[
        styles.footerContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        { backgroundColor: '#007bff' },
      ]}
    >
      <Text
        style={[
          styles.footerText,
          // eslint-disable-next-line react-native/no-inline-styles
          { color: '#fff'},
        ]}
      >
        © 2024 MyApp
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
  },
});

export default Footer;
