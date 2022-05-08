import React from 'react';
import {StyleSheet,Button, View, Text} from 'react-native';

function Descripccion({ route,navigation}) {
    const {id, description} = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
           <Text>Lista de Tareas</Text> 
           <Text>TAREA:  {id}</Text>
           <Text>DESCRIPCCION: {description}</Text>
           
           
           <View style ={style.container} >
     
            <Button 
            onPress={() => navigation.goBack("Retorno")}
            title="VOLVER A MENU"
            />
            </View>
            <View style ={style.container}>
       
          
            </View>

            <Button
            title="inicio"
            onPress={() => navigation.popToTop("Casa")}
            
            />

        </View>







  

    );
}
const style= StyleSheet.create({
    containerButton:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'gray',
        
        margin: 20,
        padding: 5,

        width: 300,
        height: 100,


    }
})




export default Descripccion;