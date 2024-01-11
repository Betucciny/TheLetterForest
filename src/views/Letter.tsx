import AnimatedBackGround from "@/components/AnimatedBackground";
import { Character } from "@/components/Character";
import FlyingImage from "@/components/FlyingImage";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import useTextAnimation  from "@/hooks/useTextAnimation";
import { getLetter } from "@/utils/data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Text, StyleSheet } from "react-native";
import { Badge, Icon, useTheme } from "react-native-paper";
import { Accelerometer } from 'expo-sensors';
import { useContext, useEffect, useState } from "react";
import { Subscription } from "expo-sensors/build/Pedometer";
import Animated from "react-native-reanimated";
import { SoundContext } from "@/context/SoundContext";
import { setTimeoutPromise } from "@/utils/functions";

type Props = NativeStackScreenProps<RootStackParamList, 'Letter'>;

export default function Letter({ route, navigation }: Props) {
    const { letter, randomOffset } = route.params;
    const letterData = getLetter(letter);
    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: theme.colors.background,
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        image: {
            resizeMode: 'contain',
            height: "50%",
            width: "100%",
        },
        container: {
            padding: 10,
            height: '90%',
            width: '90%',
            alignContent: 'center',
            justifyContent: 'space-around',
        },
        itemContainer: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            margin: 10,
            width: '75%',
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.colors.onBackground,
        },
        text: {
            color: theme.colors.onBackground,
            fontSize: 40,
            fontWeight: 'bold',
        },
        badge: {
            position: 'absolute',
            top: 90,
            right: 10,
            backgroundColor: theme.colors.primary,
        },
        containerAbsolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
        },
        iconAbsolute: {
            position: 'absolute',
            top: 100,
            right: 10,
        }
    });

    const messages = [
        "Helloooo!",
        "Let's learn the letter " + letter + "!",
        "Shake your phone to hear the sound!",
        "And also learn some words!",
        "Are you ready?",
        "Let's go!",
        "",
    ]
    const text = useTextAnimation(messages);
    const [shaked, setShaked] = useState(false);
    const [{ x, y, z }, setAcc] = useState({ x: 0, y: 0, z: 0 });
    const [subscription, setSubscription] = useState<Subscription | null>(null);

    const { playSound } = useContext(SoundContext);

    const _subscribe = () => {
        setSubscription(
            Accelerometer.addListener(async accData => {
                setAcc(accData);
                if (isShaking(accData) && !shaked) {
                    playSound(letterData.sound);
                    setShaked(true);
                    await setTimeoutPromise(4000);
                    setShaked(false);
                }
            })
        );
    };

    const _unsubscribe = () => {
        subscription?.remove();
        setSubscription(null);
    };

    const isShaking = (accData: { x: number; y: number; z: number }) => {
        const threshold = 1.2; // Adjust this value to set the sensitivity of the shake detection
        return Math.abs(accData.x) > threshold || Math.abs(accData.y) > threshold || Math.abs(accData.z) > threshold;
    };

    useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
    }, []);


    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <Header text1="Let's learn the letter" text2={letter} />

                <View style={styles.container}>
                    <Animated.Image source={letterData.image} style={styles.image} sharedTransitionTag={letter} />

                    <View style={styles.itemContainer}>
                        <Text style={styles.text}>{letterData.words[0].word}</Text>
                        <Text style={styles.text}>{letterData.words[1].word}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerAbsolute}>
                <View style={styles.iconAbsolute}>
                    <Icon source="vibrate" size={80} color={theme.colors.onBackground} />
                </View>
                <HomeButton navigation={navigation} />
                <FlyingImage image={letterData.words[0].image} direction="left" offsetY={randomOffset[0]} delay={1500} />
                <FlyingImage image={letterData.words[1].image} direction="right" offsetY={randomOffset[1]} />
                <Character text={text} />
            </View>
        </>
    )
}