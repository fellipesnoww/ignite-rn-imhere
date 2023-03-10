import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6b5b5b',
        fontSize: 16
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
    },
    input: {
        flex: 1,
        backgroundColor: "#1F1E25",
        height: 56,
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    listEmptyText: {
        fontSize: 14,
        color: '#FFF',
        textAlign: 'center'
    }
});