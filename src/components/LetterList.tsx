import { Letter, letters_data } from "@/utils/data";
import { randomInt } from "@/utils/functions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { ImageSourcePropType, Pressable, StyleSheet, View, Text, Image, FlatList } from "react-native";
import { useTheme } from "react-native-paper";
import Animated from "react-native-reanimated";

type ItemProps = {
    letter: string;
    text1: string;
    text2: string;
    asset: ImageSourcePropType;
    index: number;
    onPress: () => void;
}

function Item({ letter, text1, text2, asset, index, onPress }: ItemProps) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            backgroundColor: theme.colors.background,
            flexDirection: index % 2 == 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 10,
            margin: 10,
            width: '75%',
            borderRadius: 20,
            borderWidth: 2,
            borderColor: theme.colors.onBackground,
        },
        textContainer: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text1: {
            color: theme.colors.onBackground,
            fontSize: 25,
            fontWeight: 'bold',
        },
        text2: {
            color: theme.colors.onBackground,
            fontSize: 20,
        },
        image: {
            resizeMode: 'contain',
            height: 100,
            width: 100,
        },
    });
    return (
        <Pressable
            style={styles.mainContainer}
            onPress={onPress}
        >
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{text1}</Text>
                <Text style={styles.text2}>{text2}</Text>
            </View>
            <Animated.Image style={styles.image} source={asset} sharedTransitionTag={letter} />
        </Pressable>
    )
}


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Letters'>;
    randomLetters: Letter[];
};


export default function LetterList({navigation, randomLetters}: Props) {

    return (
        <FlatList
            data={randomLetters}
            renderItem={({ item, index }) =>
                <Item
                    letter={item.name}
                    text1={`Learn the letter ${item.name}`}
                    text2={`Like in ${item.words[0].word}`}
                    asset={item.image}
                    index={index}
                    onPress={() => navigation.navigate('Letter', { letter: item.name, randomOffset: [randomInt(10,800), randomInt(10,800)] })}
                />
            }
            keyExtractor={item => item.name}
        />
    )
}

