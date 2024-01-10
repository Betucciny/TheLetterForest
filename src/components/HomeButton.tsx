import React from "react";
import { FAB, Modal, Portal, useTheme } from "react-native-paper";
import { Text, StyleSheet } from "react-native";

export default function HomeButton({navigation}: any) {
    const theme = useTheme();
    const styles = StyleSheet.create({
        fab: {
            backgroundColor: theme.colors.primary,
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
        },
        modal: {
            backgroundColor: "black",
            padding: 20,
            margin: 20,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
        },
        textTitle: {
            color: "white",
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold"
        },
        textSub: {
            color: "white",
            fontSize: 15,
        },
    });

    return (

        <FAB
            icon="home"
            mode="elevated"
            style={styles.fab}
            color={theme.colors.onPrimary}
            onPress={() => {navigation.popToTop()}}
        />

    );

}