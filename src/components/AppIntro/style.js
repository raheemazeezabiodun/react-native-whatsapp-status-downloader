import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, .2)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: '#FFF',
        fontSize: 30,
        paddingTop: 30
    },
    descriptionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionStyle: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});
