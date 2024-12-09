import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import iconImage from '../../assets/images/rock.jpg'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iconImage}
        resizeMode="cover"
        style={styles.image}
      >
      <Text style={styles.text}>React App</Text>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
