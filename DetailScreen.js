import React from 'react';
import {StyleSheet, Button, View, Text, Image} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({route ,navigation}) {

    const {id, description, title, stack} = route.params;

    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
           
            <Text>Producto: {id}</Text>
            <Text>Titulo:{title}</Text>
            <Text>Description: {description}</Text>
            <Text>Cantidad: {stack}</Text>
            <Image
  style={{
    width: 51,
    height: 51,
    resizeMode: 'contain',
    
  }}
  source={{
    uri: 'https://http2.mlstatic.com/D_NQ_NP_887304-MLM44298446943_122020-O.jpg'
    
  }}
  


  
/>

    
            <NavigationBottom/>

        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center', 
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})

export default DetailScreen;