import { Dimensions, FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import patika_data from './patika_data.json'
import PatikaCard from './components/PatikaCard'

const App = () => {

  const [search, setSearch] = useState('')
  const [dataList, setDataList] = useState(patika_data)

  useEffect(() => {
    filteredData()
  }, [search])

  const filteredData = () => {
    const filteredData = patika_data.filter(q => q.title.toLocaleLowerCase().trim().includes(search.toLocaleLowerCase().trim()))
    setDataList([...filteredData])
  }

  const renderData = ({ item }) => <PatikaCard patika={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.header_title}>PATIKASTORE</Text>
      <TextInput
        style={styles.input}
        placeholder='Ara...'
        value={search}
        onChangeText={e => setSearch(e)}
      />
      <FlatList
        numColumns={2}
        data={dataList}
        renderItem={renderData}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#dddd'
  },
  container1: {
    width: Dimensions.get('window').width / 2
  },
  image: {
    width: Dimensions.get('screen').width / 2
  },
  header_title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple'
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
    padding: 10
  },
  input_text: {
    color: '#dddd',
    fontSize: 18
  }
})