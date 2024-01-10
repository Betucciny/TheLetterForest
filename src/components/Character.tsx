import { useEffect, useState } from "react";
import { Image, StyleSheet, View, Text } from 'react-native';
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export function Character({ text }: { text: string }) {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withTiming(1, { duration: 10000 });
    }, [text]);

    const animatedProps = useAnimatedProps(() => {
        const opacity = progress.value;
        return {
            opacity,
        };
    });

    if (text !== "") return (
        <View style={styles.imageContainer}>
            <Animated.View style={styles.textContainer}>
                <Text
                    style={styles.text}
                >
                    {text}
                </Text>
            </Animated.View>
            <Image
                source={require('@assets/helper.gif')}
                style={styles.image}
            />
        </View>
    );

    return <></>;
}

const styles = StyleSheet.create({
    imageContainer: {
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
        position: 'absolute',
        top: -30,
        right: -150,
        zIndex: 1,
        width: '200%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        padding: 10,
        borderColor: 'white',
        borderWidth: 2,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    }
});
