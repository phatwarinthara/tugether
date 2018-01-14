import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import TULogo from '../../Images/Logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import Bg from '../../Images/bg.jpg'
const { width } = Dimensions.get('window');


class Login extends React.Component {
    render() {
        return (
            <View style={{ flexDirection:'column', backgroundColor:"white", flex:1 }}>
                <Image source={Bg}
                    style={{ flexDirection:'column', position: 'absolute',width: '100%', height: '100%', resizeMode: 'stretch' }}
                >
                </Image>
                <View style={{ padding: 30 }}>
                    <Image source={TULogo} style={{ maxWidth: width - 100  ,alignSelf :'center'}} ImageResizeMode="repeat"/>
                    <View style={{ paddingVertical: 10 }}>
                        <CustomInput placeholder="Username" keyboardType="numeric" secureTextEntry={false}/>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <CustomInput placeholder="Password" keyboardType="numeric" secureTextEntry={true}/>
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <CustomButton onPressBtn ={() => { alert('login') }}  btnName="Login"/>
                    </View>
                </View>
            </View>                
        )
    }
}

export default Login;
