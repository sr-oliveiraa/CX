import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Restaurantes"
        onPress={() => navigation.navigate('Restaurantes')}
      />
      <Button
        title="Serviços Domésticos"
        onPress={() => navigation.navigate('Servicos')}
      />
      <Button
        title="Compras Online"
        onPress={() => navigation.navigate('Compras')}
      />
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

export default HomeScreen;
