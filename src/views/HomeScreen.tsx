import AnimatedBackGround from "@/components/AnimatedBackground";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";
import { Character } from "@/components/Character";
import { useEffect, useState } from "react";
import { setTimeoutPromise } from "@/utils/functions";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import Animated from "react-native-reanimated";
import InfoButton from "@/components/InfoButton";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import FlyingImage from "@/components/FlyingImage";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
    const theme = useTheme();
    const messages = [
        'Hi!',
        'Welcome to the Word Forest!',
        'Here you can learn the letters of the alphabet!',
        'And also learn some words!',
        'Are you ready?',
        'Let\'s go!',
        '',
    ];

    const text = useTextAnimation(messages);

    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: theme.colors.background,
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
        titleImage: {
            height: "100%",
            width: '100%',
            resizeMode: 'contain',
            alignSelf: 'center',
        },
        container: {
            backgroundColor: theme.colors.primary,
            padding: 10,
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
        },
        button: {
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        imageContainer: {
            height: '23%',
            width: '75%',
        },
        text: {
            color: theme.colors.onPrimary,
            fontSize: 20,
            fontWeight: 'bold',
        },
        containerButton: {
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center',
        },
        containerAbsolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
        },

    });

    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <View style={[styles.container, styles.imageContainer]}>
                    <Animated.Image
                        source={require('@assets/title.png')}
                        style={styles.titleImage}
                        sharedTransitionTag="logo"
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome to the Word Forest!</Text>
                </View>
                <View>
                    <Button
                        icon={'play'}
                        mode={'elevated'}
                        onPress={() => navigation.navigate('SelectGame')}
                        theme={theme}
                        labelStyle={styles.text}
                        buttonColor={theme.colors.primary}
                        style={styles.button}
                    >
                        Play
                    </Button>
                    <Button
                        icon={'book-open'}
                        mode={'elevated'}
                        onPress={() => navigation.navigate('Help')}
                        theme={theme}
                        labelStyle={styles.text}
                        buttonColor={theme.colors.primary}
                        style={styles.button}
                    >
                        Help
                    </Button>
                </View>
            </View>
            <View style={styles.containerAbsolute}>
                <InfoButton />
                <FlyingImage offsetY={500} direction="left" image={require('@assets/bee1.png')} delay={1000} />
                <FlyingImage offsetY={30} direction="right" image={require('@assets/bee2.png')} />
                <Character text={text} />
            </View>
        </>
    );
}
