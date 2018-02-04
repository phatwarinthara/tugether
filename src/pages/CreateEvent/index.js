import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import posterFrame from '../../Images/posterframe.jpg'
const { width, height } = Dimensions.get('window');

class CreateEvent extends React.Component {
    render() {
        return (
            <ScrollView style={{ flexDirection: 'column', backgroundColor: "white", flex: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={posterFrame} style={{ alignSelf: 'flex-start', width: 200, height: 200 }} />
                        <Text style={{ fontSize: 30 }}>Topic</Text>
                        {/* Input */}
                        <TextInput
                            secureTextEntry={false}
                            keyboardType="default"
                            style={{ height: 70, borderColor: 'gray', borderWidth: 2, width: 300, height: 50 }}
                            onChangeText={() => { }}
                            value={null}
                        />
                    </View>
                    <Text style={{ fontSize: 30 }}>Date: ________________</Text>
                    <Text style={{ fontSize: 30 }}>Time: ________________</Text>
                    <Text style={{ fontSize: 30 }}>Place: ________________</Text>
                    <Text style={{ fontSize: 30 }}>Contact: ________________</Text>
                    <Text style={{ fontSize: 30 }}>Description: ________________</Text>





                </View>

            </ScrollView>

        )
    }

}
export default CreateEvent;