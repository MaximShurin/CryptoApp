import React from 'react'
import { Platform, View, StyleSheet, Button } from 'react-native'
import QuotesTable from '../components/QuotesTable'
import { LinearGradient } from 'expo-linear-gradient'

export default function Quotes({ navigation }) {
  return (
    <LinearGradient style={styles.center} colors={['#1CB5E0', '#000046']}>
      <View
        style={{
          flex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <QuotesTable />
      </View>

      <View style={{ flex: 1 }}>
        <Button
          color={Platform.OS === 'ios' ? 'white' : '#000046'}
          title="<< Назад"
          onPress={() => navigation.goBack()}
        />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    padding: 10,
  },
})
