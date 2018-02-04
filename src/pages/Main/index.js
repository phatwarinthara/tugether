import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import imgposter1 from '../../Images/poster1.jpg'
import imgposter2 from '../../Images/poster2.jpg'
import location from '../../Images/location.png'
import line from '../../Images/line.png'
import Kaimook from '../../Images/mook.jpg'

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



class Main extends React.Component {
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
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white' }}>
          <View>
            <Text style={{ fontSize: 25 }}>5709650179</Text>
            <Text style={{ fontSize: 25 }}>พัชต์วรินทรา วงศ์ฉัตรทอง</Text>
          </View>
          <Image source={Kaimook} style={{ alignSelf: 'flex-start', width: 150, height: 150 }} />
          </View>
          <View style={{ flexDirection:'row' }}>
            <TouchableOpacity style={{ backgroundColor: 'red', paddingVertical: 20, flex: 1,alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>
                My Post
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'red', paddingVertical: 20, flex: 1,alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>
                Up Coming
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'red', paddingVertical: 20, flex: 1 ,alignItems: 'center'}}>
              <Text style={{ color: 'white' }}>
                History
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={posters}
            renderItem={({ item }) => this.renderPost(item)}
            numColumns={2}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    )
  }
}

export default Main;
