import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import posterFrame from '../../Images/posterframe.jpg';
import ImagePicker from 'react-native-image-picker';
const { width, height } = Dimensions.get('window');

const options = {
    title: 'Select Avatar',
    customButtons: [
        { name: 'fb', title: 'Choose Photo from Facebook' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class CreateEvent extends React.Component {
    state = {
        avatarSource: posterFrame,
    }
    chooseImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };
                console.log(source);
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    render() {
        return (
            <ScrollView style={{ flexDirection: 'column', backgroundColor: "white", flex: 1 }}>
                <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { this.chooseImage() }}>
                            <Image
                                source={this.state.avatarSource}
                                style={{ alignSelf: 'flex-start', width: 200, height: 200 }}
                            />
                        </TouchableOpacity>
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