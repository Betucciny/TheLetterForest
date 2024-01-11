import { setTimeoutPromise } from "@/utils/functions";
import { useEffect } from "react";
import { View, Image, ImageSourcePropType } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import startAnimation from "react-native-reanimated";

type Props = {
    offsetY: number;
    direction: 'left' | 'right';
    image: ImageSourcePropType;
    delay?: number;
};

export default function FlyingImage({ offsetY, direction, image, delay=0 }: Props) {
    const totalWidth = 1000;
    const offsetX = useSharedValue(totalWidth);
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: direction === 'left' ? offsetX.value : -offsetX.value}],
        };
    });


    useEffect(() => {
        setTimeoutPromise(delay).then(() => {
            startAnimation();
        })
        function startAnimation() {
            const animation = withTiming(0, { duration: 3000, easing: Easing.inOut(Easing.ease) });
            offsetX.value = withRepeat(animation, -1, false)
        }
    }, []);



    return (
        <Animated.View style={[{
            position: 'absolute',
            top: offsetY,
            left: direction === 'left' ? -100 : undefined,
            right: direction === 'right' ? -100 : undefined,
            width: 100,
            height: 100,
            backgroundColor: 'transparent',
            pointerEvents: 'none',  // This is important to avoid the image blocking the buttons
        }, animatedStyle]}

        >
            <Image
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                }}
                source={image}
            />
        </Animated.View>
    );
}