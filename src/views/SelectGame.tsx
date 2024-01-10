import AnimatedBackGround from "@/components/AnimatedBackground";
import { Character } from "@/components/Character";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { useTextAnimation } from "@/hooks/useTextAnimation";
import { randomLetters } from "@/utils/data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { useTheme, Button } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SelectGame'>;
};

export default function SelectGame({ navigation }: Props) {
    const theme = useTheme();

    const messages = [
        'You can select a game!',
        'You can learn the letters and their sounds!',
        'You can also learn some words!',
        'Select a game to start!',
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

        },
        titleImage: {
            height: "100%",
            width: '100%',
            resizeMode: 'contain',
            alignSelf: 'center',
        },
        container: {
            padding: 10,
            height: '75%',
            width: '90%',
            alignContent: 'center',
            justifyContent: 'space-evenly',
        },
        stuffContainer: {
            width: '100%',
            backgroundColor: theme.colors.background,
            borderRadius: 20,
            flexDirection: "column",
            padding: 10,
            alignContent: 'center',
            justifyContent: 'center',
        },
        button: {
            backgroundColor: theme.colors.primary,
            padding: 10,
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
            margin: 10,
        },
        imageContainer: {
            height: 100,
            borderRadius: 20,
            alignContent: 'center',
            justifyContent: 'center',
            margin: 10,
            borderWidth: 5,
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
        image: {
            width: '100%',
            height: '100%',
            resizeMode: "cover",
            borderRadius: 10,
        },
    });
    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <Header text1="Select your game" text2="Learn letters and words" />
                <View style={styles.container}>
                    <View style={styles.stuffContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('@assets/letters.png')}
                                style={styles.image}
                            />
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Letters', { randomLetters: randomLetters})}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Letters</Text>
                        </Button>
                    </View>
                    <View style={styles.stuffContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('@assets/words.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <Button
                            mode="contained"
                            onPress={() => navigation.navigate('Guessing')}
                            style={styles.button}
                        >
                            <Text style={styles.text}>Words</Text>
                        </Button>
                    </View>
                </View>
                <HomeButton navigation={navigation} />
                <Character text={text} />
            </View>
        </>
    );
}