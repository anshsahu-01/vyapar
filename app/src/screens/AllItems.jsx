import { StyleSheet, Text, View, FlatList } from 'react-native'


const AllItems = ({ data }) => {
    return (
        <View>
            <View style={styles.headingContainer}>
                <Text style={styles.headingText}>Items</Text>
                <Text style={styles.headingText}>Quantity</Text>
            </View>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, item.stock < 15 ? { backgroundColor: "#ffabab" } : { backgroundColor: "#c3ffab" }]}>
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock}</Text>
                    </View>

                )}
                contentContainerStyle={{ gap: 10 }}
            />

        </View>
    )
}

export default AllItems

const styles = StyleSheet.create({

    headingContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#282828',
    },

    headingText: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    itemContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 10,
        gap: 10,
    },

    itemText: {
        fontSize: 16,
        fontWeight: '500',
        padding: 5,
    }
})