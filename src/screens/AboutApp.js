import React from 'react'
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function AboutApp({ navigation }) {
  return (
    <LinearGradient style={styles.center} colors={['#1CB5E0', '#000046']}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Quotes')}
      >
        <Text style={styles.text}>Перейти к котировкам</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    width: 375,
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#000046',
  },
})
