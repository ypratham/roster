import { StyleSheet } from "react-native";



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E7EB',
    },
    taskWrapper: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        marginBottom: 20,
        fontFamily: 'LaBelleAurore-Regular'
    },
    items: {
        height: 510,
        marginTop: 20
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '50%',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        fontFamily: 'OpenSans'
    },
    inputWrapper: {
        width: '100%',
        position: 'absolute',
        bottom: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        marginEnd: 20,
        marginStart: 20,
    },
    menu: {
        backgroundColor: '#EFF1F3',
        width: 100,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    // Modal View
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
});