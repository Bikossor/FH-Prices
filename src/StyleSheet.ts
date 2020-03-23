import { StyleSheet } from 'react-native';

const colorBlack = '#000';
const colorGray = '#ccc';
const colorWhite = '#fff';

const sizeUnit_2 = 16;
const sizeUnit_3 = 24;
const sizeUnit_5 = 40;
const sizeUnit_8 = 64;

export const styleSheet = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    statusBar: {
        width: '100%',
        height: sizeUnit_3,
        backgroundColor: colorBlack,
    },
    searchBar: {
        width: '100%',
        height: sizeUnit_8,
        backgroundColor: colorBlack,
        paddingHorizontal: sizeUnit_3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        height: sizeUnit_5,
        color: colorWhite,
        borderColor: colorGray,
        borderWidth: 1,
        paddingHorizontal: sizeUnit_2,
        borderRadius: sizeUnit_3,
        flex: 1
    },
    mainScrollView: {
        width: '100%',
        flex: 1,
    },
    flatListItem: {
        padding: 16,
        marginBottom: 8,
        display: 'flex',
        flexDirection: 'row'
    },
    listItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    fontItalic: {
        fontStyle: 'italic',
    },
    fontBold: {
        fontWeight: 'bold',
    },
    flex: {
        display: 'flex',
    },    
});
