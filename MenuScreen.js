import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import Box from './Box';
import NavigationBottom from './NavigationBottom';
import tasks from './data/task';


function MenuScreen() {
    return (
        <View style={styles.root}>


            <View style={styles.containerBox}>

                {
                    tasks.map((task, i) => (
                        <Box 
                            key={i}
                            id = {task.id}
                            description = {task.description}    
                            title={task.title}   
                            stack= {task.stack}   
                                              
                        />
                    ))
                }
            </View>

            <NavigationBottom />

        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'yellow',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
})

export default MenuScreen;