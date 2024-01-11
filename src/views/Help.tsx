import AnimatedBackGround from "@/components/AnimatedBackground";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";
import { FAQ } from "@/utils/data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, StyleSheet, ScrollView, Text, FlatList } from "react-native";
import { useTheme } from "react-native-paper";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Help'>;
};

export default function Help({ navigation }: Props) {
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
        },
        container: {
            backgroundColor: theme.colors.background,
            borderRadius: 10,
            padding: 20,
            width: '90%',
            marginBottom: 20,
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
        },
        textTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.onBackground,
        },
        text: {
            fontSize: 16,
            color: theme.colors.onBackground,
            marginBottom: 10,
        },
    });
    return (
        <>
            <AnimatedBackGround />
            <View style={styles.mainContainer}>
                <Header text1="Help" text2="For the parents" />
                <FlatList
                    data={FAQ}
                    renderItem={({ item }) => (
                        <View>
                            <Text style={styles.textTitle}>{item.question}</Text>
                            <Text style={styles.text}>{item.answer}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.question}
                    contentContainerStyle={styles.container}
                />

            </View>
            <View style={styles.containerAbsolute}>
                <HomeButton navigation={navigation} />
            </View>
        </>
    )
}
