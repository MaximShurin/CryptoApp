import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const ErrorMesage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textName}>Ошибка</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    margin: 10,
    width: 375,
    height: 'auto',
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 20,
  },
  textName: {
    padding: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000046',
  },
})

export default ErrorMesage
