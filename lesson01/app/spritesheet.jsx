import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { spriteItems } from "@/constants/SpriteItems";
import SpriteImages from "@/constants/SpriteImages";

export default function SpriteSheet() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
                data={spriteItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ ({ item }) => (
                <View>
                    <View>  
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </View>
                    <Image 
                    source={SpriteImages[item.id - 1]} 
                    />
                </View>
                )}
                
            />
        </Container>
    )
}


function createStyles(theme, colorScheme) {
    return StyleSheet.create({

    })
}