import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import iconImage from '@/assets/images/rock.jpg'
import { Link } from 'expo-router'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={iconImage}
        resizeMode="cover"
        style={styles.image}
      >
      <Text style={styles.title}>React App</Text>

      <Link href="/contact" style={{ marginHorizontal: 'auto' }} asChild>
        <Pressable style={styles.button}>
         <Text style={styles.buttonText}>Contact Me</Text>
        </Pressable>
      </Link>

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
    opacity: 1,
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 120,
  },
  link: {
    fontSize: 42,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4, 
  },

  button: {
    height: 40,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: 4,
    justifyContent: 'center'

  },

  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 4,
  }
});
