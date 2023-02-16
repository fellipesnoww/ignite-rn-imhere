import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import Participant from '../../components/Participant';

import {styles} from './styles';

export default function Home(){

    const participants = ['Fellipe', 'Joao', 'José', 'Marcos'];

    function handleParticipantAdd(){
        if(participants.includes("Fellipe")) {
           return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome.")
        }
        console.log('handleParticipantAdd');
    }

    function handleParticipantRemove(name: string){
        console.log('handleParticipantAdd');
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado")
            },
            {
                text: "Não",
                style: 'cancel'
            }
        ])
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

            <FlatList 
                data={participants}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                    <Participant
                        key={item} 
                        name={item} 
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista </Text>
                )}
            />
        </View>
    );
}
