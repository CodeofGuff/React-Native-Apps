import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { spriteItems } from "@/constants/SpriteItems";
import SpriteImages from "@/constants/SpriteImages";

export default function SpriteSheet() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const styles = createStyles(theme, colorScheme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;
    const seperatorComp = <View style={styles.seperator} />
    // const headerComp = <Text>Top of List</Text>
    const footerComp = <Text style={{color: theme.text}}>End of Sprites</Text>
    const emptyComp = <Text>No Sprites Found</Text>

    return (
        <Container>
            <FlatList
                data={spriteItems}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
                ItemSeparatorComponent={seperatorComp}
                // ListHeaderComponent={headerComp}
                ListFooterComponent={footerComp}
                ListFooterComponentStyle={styles.footer}
                ListEmptyComponent={emptyComp}

                renderItem={ ({ item }) => (
                <View style={styles.row}>
                    <View style={styles.spriteTextRow}>  
                        <Text style = {[styles.spriteText, styles.spriteTitle]}>{item.title}</Text>
                        <Text style = {styles.spriteText}>{item.description}</Text>
                    </View>
                    <Image 
                    style={styles.spriteImage}
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
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20, 
            paddingHorizontal: 10,
            backgroundColor: theme.background,

        },
        seperator: {
            height: 3,
            backgroundColor: colorScheme === 'dark' ? 'lightgray' : '#000',
            width: '50%',
            maxWidth: 100,
            marginHorizontal: 'auto',
            marginBottom: 10,
        },
        footer: {
            marginHorizontal: 'auto',
        },
        row: {
            flexDirection: 'row',
            width: '100%',
            maxWidth: 250,
            height: 100,
            marginBottom: 10,
            borderStyle: 'solid',
            borderColor: colorScheme === 'dark' ? 'lightgray' : '#000',
            borderWidth: 1,
            borderRadius: 20,
            overflow: 'hidden',
            marginHorizontal: 'auto',
        },
        spriteTextRow: {
            width: '65%',
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 5,
            flexGrow: 1,
        },
        spriteText: {
            fontSize: 14,
            color: colorScheme === 'dark' ? 'lightgray' : '#000',
        },
        spriteTitle: {
            fontSize: 18,
            textDecorationLine: 'underline',
        },
        spriteImage: {
            width: '35%',
            height: '100%',
        },

    })
}