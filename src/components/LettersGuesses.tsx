import { Guess } from "@/hooks/useGuess";
import { View, Image, FlatList, StyleSheet, Pressable } from "react-native";
import { useTheme } from "react-native-paper";

type Props = {
    guesses: Guess[];
    onPress: (letter:string) => void;
}

export default function LettersGuesses({ guesses, onPress }: Props) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        item: {
            flex: 1,
            margin: 5,
            aspectRatio: 1,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        container: {
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        image: {
            width: '80%',
            alignSelf: "center",
            aspectRatio: 1,
            resizeMode: "center",
            justifyContent: "center"
        },
        mainContainer: {
            borderRadius: 10,
            backgroundColor: theme.colors.background,
            alignSelf: 'center',
            width: '95%',
            bottomMargin: 10,
            aspectRatio: 1,
        },
    });
    const renderItem = ({ item }: { item: Guess }) => (
        <Pressable style={[styles.item, {
            backgroundColor:
                item.state === 'correct'
                    ? theme.colors.primary
                    : item.state === 'incorrect'
                        ? theme.colors.error
                        : theme.colors.background
        }
        ]}
            key={item.letter}
            onPress={() => { 
                onPress(item.letter);
            }}
        >
            <Image
                source={item.asset}
                style={styles.image}
            />
        </Pressable>
    );

    return (
        <FlatList
            columnWrapperStyle={styles.container}
            style={styles.mainContainer}
            data={guesses}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={4}
        />
    );
}
