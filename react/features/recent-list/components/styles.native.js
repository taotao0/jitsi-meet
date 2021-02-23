import { ColorPalette, createStyleSheet } from '../../base/styles';

/**
 * The styles of the React {@code Component}s of the feature recent-list i.e.
 * {@code CalendarList}.
 */
export default createStyleSheet({

    /**
     * Text style of the empty recent list message.
     */
    emptyListText: {
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        textAlign: 'center'
    },

    /**
     * The style of the empty recent list container.
     */
    emptyListContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    entryNameContainer: {
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 15,
        paddingLeft: 15,
    },

    entryNameLabel: {
        color: ColorPalette.blue,
        flexShrink: 1,
        fontWeight: 'bold',
        fontSize: 20,
        opacity: 0.90
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },

    buttonStyle: {
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
    }
});
