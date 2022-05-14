import React from 'react';
import {StyleSheet,Button, View, Text} from 'react-native';

function Detalle({ route,navigation}) {
    const {id, description} = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue'}}>
           <Text>MENU</Text> 
           <Text>  {id}</Text>
           <Text> {description}</Text>
           
           <View style ={style.container} >
           <Button 
            title="Tarea 1"
            onPress={() => navigation.navigate("Descripccion",{
            id: 1,
            description: "ir por mi paga"

            }
            )}
            />
           <Button 
           title="Tarea 2"
            onPress={() => navigation.navigate("Descripccion",{
                id: 2, 
                description: "Terminar tareas"
                
            
            }
            
            )}
            
            
            />
         
            <Button 
            title="Tarea 3"
            onPress={() => navigation.navigate("Descripccion",{
            id: 3,
            description: "Jugar Zombie Dead War 4"

            }
            )}
            />
          
            </View>
            <View style ={style.container}>
            <Button 
            onPress={() => navigation.navigate("Descripccion", {
                id: 4, 
                description: 'Estudiar'
               
            })}
            title="Tarea 4"
            />
        
            <Button 
            onPress={() => navigation.navigate("Descripccion", {
                id: 5,
                description: "Jugar"
            }
            )}
            title="Tarea 5"
            />
          <Button 
            onPress={() => navigation.navigate("Descripccion", {
                id: 6,
                description: "Ver videos"
            }
            )}
            title="Tarea 6"
            />
            <Button 
            onPress={() => navigation.navigate("Descripccion", {
                id: 7,
                description: "Ahorrar para Back 4 Blood"
            }
            )}
            title="Tarea 7"
            />
            </View>

            <Button
            title="inicio"
            onPress={() => navigation.popToTop("Casa")}
            
            />
            <Button 
            onPress={() => navigation.goBack("Retorno")}
            title="VOLVER A CASA"
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




export default Detalle;