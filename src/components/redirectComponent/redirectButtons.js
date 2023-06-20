import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Linking } from 'react-native';
import { COLORS, SIZES, FONTS } from "../../theme/theme.js";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const ButtonComponents = () => {
  const handleOrderButtonPress = () => {
    const orderUrl = 'https://www.lennaomrani.com/product/every-day-vegan-budget-friendly-kookboek/';
    Linking.openURL(orderUrl);
  };

  const handleInstagramButtonPress = () => {
    const instagramUrl = 'https://www.instagram.com/lennaomrani/';
    Linking.openURL(instagramUrl);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.greenButton} onPress={handleOrderButtonPress}>
          <Text style={styles.buttonText}>Bestel nu!</Text>
          <Text style={styles.subtitle}>Everyday Vegan Budget Friendly   kookboek</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.yellowButton} onPress={handleInstagramButtonPress}>
          <Text style={styles.buttonText}>Volg mij ook op:</Text>
          <Text style={styles.subtitle}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
  },
  greenButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    height: 96,
    width: 350, // Adjust the width value as desired
    justifyContent: 'center',

  },
  yellowButton: {
    backgroundColor:  COLORS.yellowCheck,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
    height: 76,
    width: 350, // Adjust the width value as desired
    justifyContent: 'center',

  },
  buttonText: {
    color: 'white',
    fontFamily: FONTS.Nexa,
    fontSize: 16,
    textAlign: 'left',
  },
  subtitle: {
    color: 'white',
    fontFamily: FONTS.Regular,
    fontWeight: 700,
    fontSize: 16,
    textAlign: 'left',
    marginTop: 5,
  },
});

export default ButtonComponents;
