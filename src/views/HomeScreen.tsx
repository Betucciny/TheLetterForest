import AnimatedBackGround from "@/components/AnimatedBackground";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, useTheme } from "react-native-paper";
import { Character } from "@/components/Character";
import { useEffect, useState } from "react";
import { setTimeoutPromise } from "@/utils/functions";

export default function HomeScreen() {
    const theme = useTheme();
    const [text, setText] = useState('' as string);

    useEffect(() => {
        setText('Hi!');

        const changeText = async () => {
            await setTimeoutPromise(5000);
            setText('Welcome to the Word Forest!');
            await setTimeoutPromise(5000);
            setText('Here you can learn the letters of the alphabet!');
            await setTimeoutPromise(5000);
            setText('And also learn how to write them!');
            await setTimeoutPromise(5000);
            setText('Are you ready?');
            await setTimeoutPromise(5000);
            setText('Let\'s go!');
            await setTimeoutPromise(5000);
            setText('');
        };
        changeText();
    }, []);

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
            padding: 10,
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
    });

    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <View style={[styles.container, styles.imageContainer]}>
                    <Image
                        source={require('@assets/title.png')}
                        style={styles.titleImage}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome to the Word Forest!</Text>
                </View>
                <View>
                    <Button
                        icon={'play'}
                        mode={'elevated'}
                        onPress={() => console.log('Pressed')}
                        theme={theme}
                        labelStyle={styles.text}
                        style={styles.button}
                    >
                        Play
                    </Button>
                    <Button
                        icon={'book-open'}
                        mode={'elevated'}
                        onPress={() => console.log('Pressed')}
                        theme={theme}
                        labelStyle={styles.text}
                        style={styles.button}
                    >
                        Help
                    </Button>
                </View>
                <Character text={text}/>
            </View>
        </>
    );
}
         