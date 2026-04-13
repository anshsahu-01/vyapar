import { StyleSheet, Text, View, FlatList, TextInput, Pressable, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import edit from '../../../assets/images/edit.png'
import bin from '../../../assets/images/bin.png'

const CreateItems = ({ data, setData }) => {

    const [itemName, setitemName] = useState('')
    const [stockAmt, setstockAmt] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editItemId, setEditItemId] = useState(null)

    // ✅ Validation function (reusable)
    const validate = () => {
        const trimmedName = itemName.trim()

        if (!trimmedName) {
            Alert.alert("Error", "Item name cannot be empty")
            return false
        }

        if (stockAmt === "") {
            Alert.alert("Error", "Stock cannot be empty")
            return false
        }

        if (isNaN(stockAmt)) {
            Alert.alert("Error", "Stock must be a number")
            return false
        }

        if (Number(stockAmt) < 0) {
            Alert.alert("Error", "Stock cannot be negative")
            return false
        }

        return true
    }

    const handleAddStock = () => {

        if (!validate()) return

        const newStock = {
            id: Date.now(),
            name: itemName.trim(),
            stock: Number(stockAmt),
        }

        setData([...data, newStock])

        setitemName('')
        setstockAmt('')
        setIsEdit(false)
        setEditItemId(null)
    }

   const handleDelete = (id) => {
    Alert.alert(
        "Confirm Delete",
        "Are you sure you want to delete this item?",
        [
            {
                text: "Cancel",
                style: "cancel"
            },
            {
                text: "Delete",
                style: "destructive",
                onPress: () => {
                    const deletedData = data.filter((item) => item.id !== id)
                    setData(deletedData)
                }
            }
        ]
    )
}

    const handleEdit = (item) => {
        setIsEdit(true)
        setitemName(item.name)
        setstockAmt(String(item.stock))
        setEditItemId(item.id)
    }

    const handleUpdateItem = () => {

        if (!validate()) return

        setData(
            data.map((item) =>
                item.id === editItemId
                    ? {
                        ...item,
                        name: itemName.trim(),
                        stock: Number(stockAmt)
                    }
                    : item
            )
        )

        setitemName('')
        setstockAmt('')
        setIsEdit(false)
        setEditItemId(null)
    }

    return (
        <View style={styles.container}>

            {/* INPUT SECTION */}
            <View style={styles.addItemContainer}>

                <TextInput
                    style={styles.addItemStyle}
                    value={itemName}
                    placeholder='Enter Stock Name'
                    onChangeText={setitemName}
                />

                <TextInput
                    style={styles.addItemStyle}
                    value={stockAmt}
                    placeholder='Enter Stock Quantity'
                    keyboardType="numeric"
                    onChangeText={setstockAmt}
                />

                <Pressable
                    style={styles.addButton}
                    onPress={isEdit ? handleUpdateItem : handleAddStock}
                >
                    <Text style={styles.btnText}>
                        {isEdit ? 'Update Stock' : 'Add Stock'}
                    </Text>
                </Pressable>

            </View>

            {/* LIST HEADER */}
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>

            {/* LIST */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ gap: 10 }}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.itemContainer,
                            item.stock < 15
                                ? { backgroundColor: "#ffabab" }
                                : { backgroundColor: "#c3ffab" }
                        ]}
                    >
                        <Text style={styles.itemText}>{item.name}</Text>

                        <View style={styles.itemInfoContainer}>
                            <Text style={styles.itemText}>{item.stock}</Text>

                            <Pressable onPress={() => handleEdit(item)}>
                                <Image source={edit} style={{ width: 25, height: 25 }} />
                            </Pressable>

                            <Pressable onPress={() => handleDelete(item.id)}>
                                <Image source={bin} style={{ width: 25, height: 25 }} />
                            </Pressable>
                        </View>
                    </View>
                )}
            />

        </View>
    )
}

export default CreateItems

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
    },

    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#282828',
        marginBottom: 10,
    },

    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },

    itemText: {
        fontSize: 16,
        fontWeight: '500',
    },

    itemInfoContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },

    addItemContainer: {
        marginTop: 10,
        gap: 15,
        marginBottom: 20,
    },

    addItemStyle: {
        borderWidth: 1,
        borderColor: '#282828',
        borderRadius: 5,
        padding: 10,
    },

    addButton: {
        backgroundColor: '#b3c5ff',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },

    btnText: {
        fontWeight: 'bold',
    },

})