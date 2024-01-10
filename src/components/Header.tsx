import { View, Text, StyleSheet } from "react-native";
import { Surface, useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";


export default function Header({text1, text2}: {text1: string, text2: string}) {
    const theme = useTheme();

    const styles = StyleSheet.create({
        back:{
            height: 100,
            justifyContent: "center",
            alignItems: "center"
        },
        titleText: {
            color: theme.colors.onPrimary,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
        },
        subText: {
            color: theme.colors.onPrimary,
            fontSize: 15,
        },
        container: {
            backgroundColor: theme.colors.primary,
            borderRadius: 20,
            margin: 10,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        subContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        },
        logo: {
            width: 130,
            height: 60,
        },
    });

    return (
        <View style={styles.back}>
            <View style={styles.container}>
                <Animated.Image
                    source={require('@assets/title.png')}
                    style={styles.logo}
                    sharedTransitionTag="logo"
                />
                <View style={styles.subContainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.titleText}>{text1}</Text>
                    </View>
                    <Text style={styles.subText}>{text2}</Text>
                </View>
            </View>
        </View>
    );
}