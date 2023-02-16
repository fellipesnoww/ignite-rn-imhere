import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import Participant from '../../components/Participant';

import {styles} from './styles';

export default function Home(){

    const [participants, setParticipants] = useState([]);
    const [participantName, setParticipantName] = useState("");


    function handleParticipantAdd(){
        if(participants.includes(participantName)) {
           return Alert.alert("Participante existente", "Já existe um participante na lista com esse nome.")
        }
        setParticipants(prevState => [...prevState, participantName]);
        setParticipantName("")
    }

    function handleParticipantRemove(name: string){
        Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter(participant => participant !== name))
                }
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
                    onChangeText={setParticipantName}
                    value={participantName}
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
