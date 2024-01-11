import AnimatedBackGround from "@/components/AnimatedBackground";
import { Character } from "@/components/Character";
import FlyingImage from "@/components/FlyingImage";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import LetterList from "@/components/LetterList";
import  useTextAnimation  from "@/hooks/useTextAnimation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, StyleSheet, FlatList, } from "react-native";
import { useTheme } from "react-native-paper";


type Props = NativeStackScreenProps<RootStackParamList, 'Letters'>;


export default function Letters({ route, navigation }: Props) {
    const { randomLetters } = route.params;

    const messages = [
        "Hi again, welcome to the letters section!",
        "Here you can learn the letters of the alphabet!",
        "And also learn some words!",
        "Are you ready?",
        "Let's go!",
        "",
    ]

    const text = useTextAnimation(messages);

    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: theme.colors.background,
            height: '100%',
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
        },
        containerAbsolute: {
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
        }
    });



    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <Header text1="Letters" text2="Select a letter" />
                <LetterList navigation={navigation} randomLetters={randomLetters} />

            </View>
            <View style={styles.containerAbsolute}>
                <HomeButton navigation={navigation} />
                <FlyingImage offsetY={120} direction="left" image={require('@assets/bee1.png')} delay={1000} />
                <FlyingImage offsetY={700} direction="right" image={require('@assets/bee2.png')} />
                <Character text={text} />
            </View>
        </>
    )
}