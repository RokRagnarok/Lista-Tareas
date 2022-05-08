import React from 'react';
import {Button,View, Text} from 'react-native';
import styles from './styles';
function Casa({navigation}) {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
        <View style ={styles.container} >
            <h1><b><Text style={styles.text}>ACTIVIDAD 1 </Text></b></h1>
            <Text style={styles.text}>TAREAS A REALISAR</Text>
            <Button 
            onPress={() => navigation.navigate("Detalle",{

            })}
            title="INICIAR"
            />
        

        </View>
        </View>
    );
}

export default Casa;