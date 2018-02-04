import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import kaimook from '../../Images/mook.jpg'
import wi from '../../Images/wi.jpg'
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
            <ScrollView style={{ flexDirection: 'column', backgroundColor: "white", flex: 1 }}>
                <View style={{ padding: 20 }}>

                    {
                        users.map((user) => {
                            return (
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={user.img} style={{ alignSelf: 'flex-start', width: 100, height: 100 }} />
                                        <View>
                                            <Text style={{ fontSize: 25 }}>{user.id}</Text>
                                            <Text style={{ fontSize: 25 }}>{user.fullname}</Text>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 25 }}>________________________________________________</Text>
                                </View>
                            );
                        })
                    }
                </View>
            </ScrollView>

        )
    }

}
export default Joined;