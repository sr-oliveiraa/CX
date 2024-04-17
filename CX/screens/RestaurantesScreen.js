import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RestaurantesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Lista de Restaurantes</Text>
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

export default RestaurantesScreen;
