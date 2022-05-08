import React from 'react';
import {StyleSheet,Button, View, Text} from 'react-native';

function DetailsScreen({ route,navigation}) {
    const {id, description} = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green'}}>
           <Text>Pantalla verde</Text> 
           <Text> Screen: {id}</Text>
           <Text> Screen: {description}</Text>

           <View style ={style.container} >
           <Button 
            onPress={() => navigation.navigate("Details")}
            title="Home"
            />
            <Button 
            onPress={() => navigation.goBack("Retorno")}
            title="Volver a Home"
            />
            <Button 
            title="Tarea1"
            onPress={() => navigation.push("Details",{
            id: 1,
            description: "ir por mi paga"

            }
            )}
            />
            </View>
            <View style ={style.container}>
           <Button 
            onPress={() => navigation.navigate("Details",{
                id: 1, 
                description: "Trabajar"
            })}
            title="tarea2"
            />
            <Button 
            onPress={() => navigation.goBack("Retorno", {
                id: 1,
                description: "Jugar"
            }
            )}
            title="Tarea3"
            />
            <Button 
            onPress={() => navigation.push("Details")}
            title="Parpadeo"
            />
            </View>

            <Button
            title="inicio"
            onPress={() => navigation.popToTop("Home")}
            
            />

        </View>







  

    );
}
const style= StyleSheet.create({
    containerButton:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'gray',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,


    }
})

export default DetailsScreen;