import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import imgposter1 from '../../Images/poster1.jpg'
import imgposter2 from '../../Images/poster2.jpg'
import location from '../../Images/location.png'
import line from '../../Images/line.png'
// import posterframe from '../../Images/posterframe.jpg'
const { width, height } = Dimensions.get('window');

const posters = [
  {
    id: '12345555',
    imgposter: imgposter1,
    name: 'TU Freshynight',
    month: 'NOV',
    date: '16',
    img: location,
    place: 'Gym 5',
  },
  {
    id: '12345556',
    imgposter: imgposter2,
    name: 'Life Dream Journey',
    month: 'AUG',
    date: '1',
    img: location,
    place: 'ศูนย์ประชุม',
  },
  {
    id: '12345557',
    imgposter: imgposter2,
    name: 'Life Dream Journey',
    month: 'AUG',
    date: '1',
    img: location,
    place: 'ศูนย์ประชุม',
  },
  {
    id: '12345557',
    imgposter: imgposter2,
    name: 'Life Dream Journey',
    month: 'AUG',
    date: '1',
    img: location,
    place: 'ศูนย์ประชุม',
  }
]



class Home extends React.Component {
  renderPost(item) {
    console.log('--------- tert')
    console.log('===> ', item)
    console.log(item)
    return (
      <View style={{ borderWidth: 2, borderColor: 'gray', width: 270 }}>
        <Image source={item.imgposter} style={{ alignSelf: 'flex-start', width: 270, height: 300 }} />
        <Text style={{ fontSize: 30 }}>{item.name}</Text>
        <Text style={{ fontSize: 30 }}>___________________</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
            <Text style={{ fontSize: 25 }}>{item.month}</Text>
            <Text style={{ fontSize: 25 }}>{item.date}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={line} style={{ alignSelf: 'flex-start' }} />
            <View>
              <Image source={item.img} style={{ alignSelf: 'center', width: 30, height: 30 }} />
              <Text style={{ fontSize: 25 }}>{item.place}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
  render() {
    return (
      <FlatList
        data={posters}
        renderItem={({ item }) => this.renderPost(item)}
        numColumns={2}
      />
    )
  }
}

export default Home;
