import AnimatedBackGround from "@/components/AnimatedBackground";
import { Character } from "@/components/Character";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import LettersGuesses from "@/components/LettersGuesses";
import SuccessMessage from "@/components/SuccessMessage";
import useGuess from "@/hooks/useGuess";
import useTextAnimation from "@/hooks/useTextAnimation";
import { getRandomWord } from "@/utils/data";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, useTheme } from "react-native-paper";


type Props = NativeStackScreenProps<RootStackParamList, 'Guessing'>;

export default function Guessing({ route, navigation }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
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
        },
        container: {
            padding: 10,
            height: '90%',
            width: '90%',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
        },
        imageContainer: {
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            margin: 10,
            width: '100%',
            height: '40%',
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.colors.onBackground,
        },
        image: {
            resizeMode: 'contain',
            height: "100%",
            width: "100%",
        },
        button: {
            backgroundColor: theme.colors.background,
            width: '50%',
            alignSelf: 'center',
            margin: 10,
        },
        text: {
            color: theme.colors.onBackground,
            fontSize: 40,
            fontWeight: 'bold',
        },
        textContainer: {
            margin: 10,
            width: '100%',
            borderRadius: 20,
            borderColor: theme.colors.onBackground,
            borderWidth: 2,
            alignSelf: 'center',
            backgroundColor: theme.colors.background,
            alignItems: 'center',
            justifyContent: 'center',
        }

    });

    const { word } = route.params;
    const { lettersPool, tryGuess, isFinished, wordLines } = useGuess(word.word);

    console
    const messages = [
        "Let's guess the word!",
        "",
    ]
    const text = useTextAnimation(messages);

    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <Header text1="Guessing the Word" text2="Select a letter to guess it" />
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={isFinished ? word.image : word.shadow}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            {wordLines}
                        </Text>
                    </View>
                    <LettersGuesses
                        guesses={lettersPool}
                        onPress={tryGuess}
                    />
                    <Button
                        style={styles.button}
                        mode="contained"
                        onPress={() => {
                            navigation.goBack();
                            navigation.navigate('Guessing', { word: getRandomWord() });
                        }}
                    >
                        {isFinished ? 'Next Word' : 'Restart'}
                    </Button>

                </View>
            </View>
            <View style={styles.containerAbsolute}>
                <SuccessMessage isActive={isFinished} />
                <HomeButton navigation={navigation} />
                <Character text={text} />
            </View>
        </>
    )
}