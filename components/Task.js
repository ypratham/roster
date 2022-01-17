import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Task(props) {

    return (
        <View style={styles.item}
        >
            <View style={styles.itemLeft}>
                <View style={[styles.square, { borderColor: props.color }]}></View>
                <View style={{ width: '90%' }}>
                    <Text style={{ fontFamily: 'OpenSans', fontSize: 16 }}>{props.text}</Text>
                    <Text style={styles.dueDate}>Today</Text>
                </View>
            </View>
        </View>
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
        borderWidth: 2,
        marginEnd: 10,
    },
    dueDate: {
        color: '#000',
        fontSize: 12,
        marginTop: 5,
        fontFamily: 'OpenSans'
    }
})