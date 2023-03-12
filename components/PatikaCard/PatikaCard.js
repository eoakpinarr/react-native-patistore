import { Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './PatikaCard.style'

const PatikaCard = ({ patika }) => {
    
    return (
        <View style={styles.container}>
            <Image source={{ uri: patika.imgURL }} style={styles.image} />
            <Text style={styles.title}>{patika.title}</Text>
            <Text style={styles.price}>{patika.price}</Text>
            {!patika.inStock && <Text style={styles.inStock}>STOKTA YOK</Text>}        
            </View>
    )
}

export default PatikaCard

