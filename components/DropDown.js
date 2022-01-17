import React from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
} from 'react-native';
import Collapsible from 'react-native-collapsible';


const DropDownMenuItem = ({ item, onPress, borderColor, modalCollapsed, setModalCollapsed }) => {
    return (
        <TouchableOpacity
            onPress={() => {
                onPress(item, borderColor);
                setModalCollapsed(!modalCollapsed)
            }}
            style={styles.dropDownItemCircle}>
            <View
                style={{ backgroundColor: borderColor, width: 8, height: 8, borderRadius: 10, }}></View>
            <Text
                style={styles.dropDownText}>{item}</Text>
        </TouchableOpacity>
    )
}


export default function DropDown(props) {

    const [modalCollapsed, setModalCollapsed] = React.useState(true);

    const handleOnPress = (item, borderColor) => {
        props.setGroup({
            name: item,
            color: borderColor
        })
    }
    return (
        <View>
            {/* Drop down button */}
            <TouchableOpacity
                style={styles.dropDownWrapper}
                onPress={() => { setModalCollapsed(!modalCollapsed) }}
            >
                <Text style={{ fontFamily: 'OpenSans' }} >{props.group.name}</Text>
                <Image
                    style={{
                        transform: [{ rotate: modalCollapsed ? '0deg' : '180deg' }],
                    }}
                    source={require('../assets/icons/down.png')} />
            </TouchableOpacity>

            {/* Drop down menu */}
            <Collapsible
                align='bottom'
                collapsed={modalCollapsed}
            >
                <View style={styles.dropDown}>
                    {
                        props.data.map((item, index) => {
                            return (
                                <DropDownMenuItem key={index} item={item.name} onPress={handleOnPress} borderColor={item.color} modalCollapsed={modalCollapsed} setModalCollapsed={setModalCollapsed} />
                            )
                        })
                    }
                </View>
            </Collapsible>
        </View>
    )
}


const styles = StyleSheet.create({
    dropDownWrapper: {
        padding: 10,
        width: 100,
        backgroundColor: '#CAF7E3',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    dropDown: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    dropDownText: {
        fontSize: 14,
        marginVertical: 10,
        marginLeft: 10,
        fontFamily: 'OpenSans'
    },
    dropDownItemCircle: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})