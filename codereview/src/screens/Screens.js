import React from 'react';
import {View, Text, Stylesheet, SafeAreaView, TouchableOpcity, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component{
    render(){
        return(
            <View style={style.container}>
                <SafeAreaView style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:'flex-end', margin:16}} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name='bars' size={24} color='#202020' />
                    </TouchableOpacity>
                    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                        <Text style={style.text}>{this.props.name}Screen </Text>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        color: '#00000',
        fontSize: 20,
        fontweight: '500'
    },
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    }
}); 