import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import poster from '../../Images/poster1.jpg'
import facebook from '../../Images/facebook.png'
import CustomInput from '../../components/CustomInput';
const { width, height } = Dimensions.get('window');

class Description extends React.Component {
    render() {
        return (
            <ScrollView style={{ flexDirection: 'column', backgroundColor: "white", flex: 1 }}>
                <View>
                    <Text style={{ fontSize: 40 }}> Description </Text>
                    <Image source={poster} style={{ width: width, alignSelf: 'center' }} ImageResizeMode="repeat" />
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 25 }}>Freshy night 2017</Text>
                        <Text style={{ fontSize: 25 }}>Date    : 16 November</Text>
                        <Text style={{ fontSize: 25 }}>time    : 17.00-23.00</Text>
                        <Text style={{ fontSize: 25 }}>Place   : Gymnasium 5</Text>
                        <Text style={{ fontSize: 25 }}>Contact : </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={facebook} style={{ alignSelf: 'flex-start', width: 50, height: 50 }} />
                            <Text style={{ fontSize: 25 }}>facebook TU Freshy</Text>
                        </View>
                        <Text style={{ fontSize: 25 }}>Description : </Text>
                        <Text style={{ fontSize: 25 }}>Freshynight 2017 (รอบ final)</Text>
                        <Text style={{ fontSize: 25 }}>16 พฤศจิกายน 2017 ตั้งแต่เวลา 17.00 น. เป็นต้นไป</Text>
                        <Text style={{ fontSize: 25 }}>ณ ยิมเนเซี่ยม 5 ธรรมศาตร์ศูนย์รังสิต</Text>


                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            {/* Input */}
                            <TextInput
                                secureTextEntry={false}
                                keyboardType="default"
                                style={{ height: 70, borderColor: 'gray', borderWidth: 2, width: 350, height: 70 }}
                                onChangeText={() => { }}
                                value={null}
                            />

                            {/* Button */}
                            <TouchableOpacity
                                style={{ backgroundColor: 'grey', padding: 15, borderRadius: 1, alignItems: 'center' }}
                            >
                                <Text style={{ color: 'white', fontSize: 30 }}>
                                    OK
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

}

export default Description;