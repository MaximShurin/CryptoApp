import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function QuotesTableIte(props) {
  const { name, last, highestBid, percentChange } = props.item
  let colorPercent = '#000046'
  if (percentChange < 0) {
    colorPercent = 'red'
  } else {
    colorPercent = 'green'
  }
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.text}>Last: {last}</Text>
        <Text style={styles.text}>Highest Bid: {highestBid}</Text>
        <Text style={{ ...styles.text, color: colorPercent }}>
          Percent Change: {percentChange} %
        </Text>
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
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },

  text: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    textAlign: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000046',
  },
  textName: {
    padding: 15,
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000046',
  },
})
