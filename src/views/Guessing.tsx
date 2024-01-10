import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Text } from "react-native";


type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Guessing'>;
};

export default function Guessing({navigation}: Props){
    return(
        <View>
            <Text>Guessing</Text>
        </View>
    )
}