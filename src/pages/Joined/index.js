import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import kaimook from '../../Images/mook.jpg'
import wi from '../../Images/wi.jpg'
import Buttonbar from '../../Images/bar.jpg';
import HomeIcon from '../../Images/homeicon.png';
import NotiIcon from '../../Images/notiicon.png';
import ProfileIcon from '../../Images/profileicon.png';
import FindIcon from '../../Images/findicon.png';
const { width, height } = Dimensions.get('window');

const users = [
    {
        id: '5709650179',
        fullname: 'พัชต์วรินทรา วงศ์ฉัตรทอง',
        img: kaimook,
    },
    {
        id: '5709650278',
        fullname: 'เวธกา วศกรขจรยศ',
        img: wi,
    },
]

class Joined extends React.Component {
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

                    {
                        users.map((user) => {
                            return (
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={user.img} style={{ alignSelf: 'flex-start', width: 50, height: 50 }} />
                                        <View>
                                            <Text style={{ fontSize: 15 }}>{user.id}</Text>
                                            <Text style={{ fontSize: 15 }}>{user.fullname}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 25 }}>____________________________</Text>
                                </View>
                            );
                        })
                    }
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
export default Joined;