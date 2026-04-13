import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItems from './AllItems'
import CreateItems from './CreateItems'

const HomeScreen = () => {

  const [view, setView] = useState(0)
  const [data, setData] = useState([
  { id: 1, name: "Wheat", stock: 10, unit: "kg" },
  { id: 2, name: "Corn", stock: 23, unit: "kg" },
  { id: 3, name: "Spices", stock: 11, unit: "kg" },
  { id: 4, name: "Rice", stock: 32, unit: "kg" },
  { id: 5, name: "Oats", stock: 19, unit: "kg" },
])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? { backgroundColor: "#ff5959" } : null]} onPress={() => setView(0)}>
          <Text style={styles.btnText}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 1 ? { backgroundColor: "#ff5959" } : null]} onPress={() => setView(1)}>
          <Text style={styles.btnText}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button, view === 2 ? { backgroundColor: "#ff5959" } : null]} onPress={() => setView(2)}>
          <Text style={styles.btnText}>Create Stock</Text>
        </Pressable>
      </View>

      <View>
        {view === 0 && <AllItems data={data} />}
        {view === 1 && <AllItems data={data.filter((item) => item.stock < 15)} />}
        {view === 2 && <CreateItems data={data} setData={setData}/>}
      </View>

    </View>

  )
}

export default HomeScreen

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    // justifyContent:'center',
    // alignItems:'center',
    backgroundColor: '#c6f0ff',
    padding: "5%",
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 15,
  },

  button: {
    backgroundColor: '#b3c5ff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,

  },

  btnText: {
    color: "#000",
    fontSize: 14,
    fontWeight: 'bold',
  }

})