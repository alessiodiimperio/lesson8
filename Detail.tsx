import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { DetailViewRouteProp } from './App'

export default function Detail({ route }: { route: DetailViewRouteProp }) {
    const [item, setItem] = useState<ListItem | null>(null);
    const { itemId } = route.params

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${itemId}`)
            .then((response) => response.json())
            .then((json) => setItem(json))
            .catch(error => console.log(error));
    }, []);

    const checkSale = () => {
        if(item && item?.price > 50){
            return (<Text style={{color:'red'}}> OMG! Only ${ (item?.price * 0.2).toFixed(2) }!! Down from ${item.price}</Text>)
        } else {
            return <Text style={{color:'green'}}>${item?.price.toFixed(2)}</Text>
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item?.image }} />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{item?.title}</Text>
                {checkSale()}
                <Text style={styles.descriptionLabel}>Description</Text>
                <Text style={styles.description}>{item?.description}</Text>
                <Text style={styles.category}>Category: {item?.category}</Text>
                <Button title="Purchase" onPress={() => console.log("Sry! Out of stock!")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        alignItems:'center'
    },
    imageContainer:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        height:200,
        width:200,
        margin:20
    },
    infoContainer:{ 
        flex:1,
        width:'80%',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginVertical:30,
        
    },
    price:{
        color:'green',
        fontSize:16,
        marginVertical:20,
    },
    descriptionLabel:{
        fontWeight:'bold',
        marginTop:20,
    },
description:{},
category:{
    marginVertical:20,
    color:'grey'
},

});
