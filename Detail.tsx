import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default function Detail() {
    const [item, setItem] = useState<Item | null>(null);
    useEffect(() => {
        fetch(`'https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((json) => setItem(json))
            .catch(console.log);
    }, []);
    return (
        <View>
            <Image />
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
