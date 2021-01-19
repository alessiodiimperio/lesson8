import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import ListItem from "./ListItem";

export default function ListView({navigation}:{ navigation:ListViewNavigationProp}) {
    const [items, setItems] = useState<ListItem[]>([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => setItems(json))
            .catch(console.log);
    }, []);

    const navigateToDetail : (userId:string) => void = (userId) => {
        navigation.navigate('Detail', {userId})
    }

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={items}
                renderItem={({ item }) => <ListItem item={item} onPress={navigateToDetail} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor:'white',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    list: {
        width: "100%",
    },
});
