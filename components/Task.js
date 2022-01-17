import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Task(props) {

    return (
        <LinearGradient
            style={styles.item}
            colors={['rgba(133,253,246,0.53)', '#CAF7E3']}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0, 1]}
        >
            <View style={styles.itemLeft}>
                <View style={[styles.square, { backgroundColor: props.color }]}></View>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontFamily: 'OpenSans', fontSize: 16 }}>{props.text}</Text>
                    <Text style={styles.dueDate}>Today</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        height: 14,
        width: 14,
        borderRadius: 8,
        marginEnd: 10,
    },
    dueDate: {
        color: '#000',
        fontSize: 12,
        marginTop: 5,
        fontFamily: 'OpenSans'
    }
})