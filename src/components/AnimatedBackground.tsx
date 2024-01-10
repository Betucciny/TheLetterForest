
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, ImageBackground, StyleSheet, View } from 'react-native';

const INPUT_RANGE_START = 0;
const INPUT_RANGE_END = 1;
const OUTPUT_RANGE_START = 0;
const OUTPUT_RANGE_END = -1100;
const ANIMATION_TO_VALUE = 1;
const ANIMATION_DURATION = 30000;

export default function AnimatedBackGround() {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;

    useEffect(() => {
        const translate = () => {
            translateValue.setValue(initialValue);
            Animated.timing(translateValue, {
                toValue: ANIMATION_TO_VALUE,
                duration: ANIMATION_DURATION,
                easing: Easing.inOut(Easing.quad),
                useNativeDriver: true,
            }).start(() => translate());
        };

        translate();
    }, [translateValue]);

    const translateAnimation = translateValue.interpolate({
        inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
        outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });


    return (
        <Animated.Image
            resizeMode="cover"
            style={{
                ...styles.background,
                transform: [
                    {
                        translateX: translateAnimation,
                    },
                ],
            }}
            source={require("@assets/background.png")}
        />
    )
}

const styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: 2000,
        left: 0,
        height: "100%",
        transform: [
            { translateX: 0, },
        ],
    },
})