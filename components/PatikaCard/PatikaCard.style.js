import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    },
    container: {
        marginTop: 10,
        padding: 10,
        flex: 1,
        backgroundColor: '#ffff',
        margin: 5,
        borderRadius: 10
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'left',
        color: 'black'
    },
    price: {
        textAlign: 'left',
        color: 'gray',
        fontWeight: 'bold'
    },
    inStock: {
        color: 'red',
        fontWeight: 'bold'
    }
})