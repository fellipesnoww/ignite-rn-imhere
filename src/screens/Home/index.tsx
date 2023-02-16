import React from 'react';
import { Text, TextInput, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export default function Home(){

    function handleParticipantAdd(){
        console.log('handleParticipantAdd')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>React</Text>
            <Text style={styles.eventDate}>Quinta feira, 16 de fevereiro de 2023</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                />

                <TouchableOpacity style={styles.button} onPress={() => handleParticipantAdd()}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
