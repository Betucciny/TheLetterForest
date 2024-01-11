
import { Image, StyleSheet, View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

export function Character({ text }: { text: string }) {

    if (text !== "") return (
        <View style={styles.imageContainer}>
            <Animated.View style={styles.textContainer}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </Animated.View>
            <Image
                source={require('@assets/helper.gif')}
                style={styles.image}
            />
        </View>
    );

    return null;
}

const styles = StyleSheet.create({
    imageContainer: {
        pointerEvents: 'none',
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 200,
        width: 120,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "cover",
    },
    textContainer: {
        pointerEvents: 'none',
        position: 'absolute',
        top: -30,
        right: -150,
        zIndex: 1,
        width: '200%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 10,
        borderColor: 'white',
    },
    text: {
        pointerEvents: 'none',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    }
});
