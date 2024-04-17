import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ServicosScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Lista de Serviços Domésticos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ServicosScreen;
