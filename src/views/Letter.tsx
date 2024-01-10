import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import { View, Text } from "react-native";


type Props = NativeStackScreenProps<RootStackParamList, 'Letter'>;

export default function Letter({route, navigation}: Props){
    return(
        <View>
            <Text>Letter</Text>
        </View>
    )
}