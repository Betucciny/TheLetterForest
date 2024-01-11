import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import Animated, { useAnimatedProps, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

type Props = {
    isActive: boolean;
}

export default function SuccessMessage({ isActive }: Props) {
    const fontSize = useSharedValue(40);
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            position: 'absolute',
            alignSelf: 'center',
            left: (Dimensions.get('window').width / 2) - 100,
            bottom: 100,
            transform: [{ translateX: -50 }, { translateY: -50 }],
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
            padding: 10,
            borderWidth: 2,
            borderColor: 'white',
            zIndex: isActive ? 1 : -1,
        },
        text: {
            color: 'white',
            fontSize: 40,
            fontWeight: 'bold',
        },
    });

    useEffect(() => {
        fontSize.value = withRepeat(withTiming(80, { duration: 500 }), -1, true);
    }, [isActive]);

    const animatedProps = useAnimatedProps(() => {
        return {
            fontSize: fontSize.value,
        };
    });

    const AnimatedText = Animated.createAnimatedComponent(Text);

    return (
        <View style={[styles.container]} >
            <AnimatedText style={[styles.text, animatedProps]} >Correct!</AnimatedText>
        </View>
    );
}