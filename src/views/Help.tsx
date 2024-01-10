import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Text } from "react-native";

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Help'>;
};

export default function Help({ navigation }: Props) {
    return(
        <View>
            <Text>
                Help
            </Text>
        </View>
    );
}