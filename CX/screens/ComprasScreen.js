import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComprasScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Lista de Compras Online</Text>
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

export default ComprasScreen;
