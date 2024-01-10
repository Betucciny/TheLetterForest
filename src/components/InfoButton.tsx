import React from "react";
import { FAB, Modal, Portal, useTheme } from "react-native-paper";
import {Text, StyleSheet} from "react-native";

export default function InfoButton() {
    const [visible, setVisible] = React.useState(false);
    const theme = useTheme();
    const styles = StyleSheet.create({
        fab: {
            backgroundColor: theme.colors.primary,
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
        },
        modal :{
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
        <>
            <Portal>
                <Modal visible={visible} onDismiss={() => {setVisible(false)}} contentContainerStyle={styles.modal}>
                    <Text style={styles.textTitle}>The Word Forest</Text>
                    <Text style={styles.textSub}>Developed by: Roberto Herrera</Text>
                    <Text style={styles.textSub}>App Version 1.0.0</Text>
                </Modal>
            </Portal>
            <FAB
                icon="information"
                mode= "elevated"
                style={styles.fab}
                color={theme.colors.onPrimary}
                onPress={() => {setVisible(true)}}
            />
        </>
    );
    
}