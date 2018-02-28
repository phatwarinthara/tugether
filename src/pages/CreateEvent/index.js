import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import posterFrame from '../../Images/posterframe.jpg';
import ImagePicker from 'react-native-image-picker';
import Buttonbar from '../../Images/bar.jpg';
import HomeIcon from '../../Images/homeicon.png';
import NotiIcon from '../../Images/notiicon.png';
import ProfileIcon from '../../Images/profileicon.png';
import FindIcon from '../../Images/findicon.png';

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
            <View style={{ flex: 1 }}>

                <View style={{ flexDirection: 'column', height: 55, width: '100%' }}>

                    <Image source={Buttonbar}
                        style={{ position: 'absolute', width: '100%', height: 55, resizeMode: 'stretch' }}
                    />

                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ height: 55, flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: 'grey', flexDirection: 'row' }}>
                            <TextInput style={{ fontSize: 20, flex: 1 }} placeholder="Search" />
                            <Image source={FindIcon} style={{ width: '20%', height: '100%', alignItems: 'flex-end', justifyContent: 'flex-end' }} />
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flexDirection: 'column', backgroundColor: "white", flex: 1 }}>
                    <View style={{ padding: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => { this.chooseImage() }}>
                                <Image
                                    source={this.state.avatarSource}
                                    style={{ alignSelf: 'flex-start', width: 200, height: 200 }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>




                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{marginBottom:16, fontSize: 20 }}>Topic:   </Text>
                                    <Text style={{ fontSize: 20 }}>Date:  </Text>
                                    <Text style={{ fontSize: 20 }}>Time: </Text>
                                    <Text style={{ fontSize: 20 }}>Place: </Text>
                                    <Text style={{ fontSize: 20 }}>Contact: </Text>
                                    <Text style={{ fontSize: 20 }}>Description: </Text>
                                </View>

                                <View>
                                    <TextInput
                                        secureTextEntry={false}
                                        keyboardType="default"
                                        style={{ height: 50, borderColor: 'gray', borderWidth: 2, width: 180, height: 40 }}
                                        onChangeText={() => { }}
                                        value={null}
                                    />
                                    <Text style={{ fontSize: 20 }}> ___________________</Text>
                                    <Text style={{ fontSize: 20 }}> ___________________</Text>
                                    <Text style={{ fontSize: 20 }}> ___________________</Text>
                                    <Text style={{ fontSize: 20 }}> ___________________</Text>
                                    <Text style={{ fontSize: 20 }}> ___________________</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'column', height: 55 }}>

                    <Image source={Buttonbar}
                        style={{ position: 'absolute', width: '100%', height: 55, resizeMode: 'stretch' }}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ height: 55, flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: 'grey', flexDirection: 'row' }}>
                            <Image source={HomeIcon} style={{ width: '20%', height: '50%' }} />
                            {/* <Text style={{ fontSize: 20 }}>  Home </Text> */}
                        </View>

                        <View style={{ height: 55, flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: 'grey', flexDirection: 'row' }}>
                            <Image source={NotiIcon} style={{ width: '20%', height: '50%' }} />
                            {/* <Text style={{ fontSize: 20 }}>  Notification </Text> */}
                        </View>

                        <View style={{ height: 55, flex: 1, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderColor: 'grey', flexDirection: 'row' }}>
                            <Image source={ProfileIcon} style={{ width: '20%', height: '50%' }} />
                            {/* <Text style={{ fontSize: 20 }}>  Profile </Text> */}
                        </View>
                    </View>
                </View>
            </View >
        )
    }

}
export default CreateEvent;