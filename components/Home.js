import { Text, View } from "react-native";

function Home() {
    console.log("dsa");

    return <View
        style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white'
        }}>
        <Text>Try editing me! 🎉</Text>
    </View>
}
export default Home