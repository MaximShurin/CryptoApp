import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/core'
import { getData } from '../../services/API'
import ErrorMesage from './ErrorMesage'
import QuotesTableItem from './QuotesTableItem'

export default function QuotesTable() {
  const [appState, setAppState] = useState({
    data: null,
    loading: true,
    error: false,
  })

  useFocusEffect(
    React.useCallback(() => {
      const interval = setInterval(() => {
        getData()
          .then((resp) => {
            const data = Object.entries(resp)
            const dataArr = data.map(([name, value]) => {
              return {
                name,
                id: value.id.toString(),
                last: value.last,
                highestBid: value.highestBid,
                percentChange: value.percentChange,
              }
            })

            setAppState({
              ...appState,
              data: dataArr,
              loading: false,
              error: false,
            })
          })
          .catch(() => {
            setAppState({
              ...appState,
              loading: false,
              error: true,
            })
            console.error('Ошибка')
          })
        console.log('Сделан Запрос')
      }, 5000)

      return () => {
        clearInterval(interval)
      }
    }, [setAppState])
  )
  // const { data, loading, error } = useContext(MyContext)

  const errorMesage = appState.error ? <ErrorMesage /> : null
  const indicator = appState.loading ? (
    <ActivityIndicator size="large" color="white" />
  ) : null
  const content = !(appState.loading || appState.error) ? (
    <FlatList
      data={appState.data}
      renderItem={({ item }) => <QuotesTableItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  ) : null

  return (
    <View style={styles.container}>
      {errorMesage}
      {indicator}
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
})
