import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react'

export default function Post() {
  return (
    <View>
      <View style={styles.two}>
        <Image source={require('./assets/happy.jpg')}
        style={{height: 70, width: 70, borderRadius: 35}}/>
        <View style={styles.down}><AntDesign name="down" size={24} color="grey" /></View>
        <Text style={{fontSize: 15, fontWeight: '700', right: -80, top: -60}}>Amandla Stenberg</Text>
        <Text style={{fontSize: 14, fontWeight: '700', right: -80, top: -60, color: 'grey'}}>4 Days ago</Text>
        <View style={styles.world}><Fontisto name="world-o" size={10} color="grey" /></View>
        <Text style={{fontWeight: '700', top: -35}}>I am very exited to let my fans know that i will soon reappear on their screens in the upcoming movie "Everything, Everything".</Text>
        <View style={styles.user}>
            <TouchableOpacity>
                <View style={styles.like}><AntDesign name="like1" size={28} color="grey" /></View>
            </TouchableOpacity>


            <TouchableOpacity>
                <View style={styles.comment}><FontAwesome name="comment" size={28} color="grey" /></View>
            </TouchableOpacity>


            <TouchableOpacity>
                <View style={styles.share}><FontAwesome5 name="share" size={28} color="grey" /></View>
            </TouchableOpacity>


        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    two:{
        backgroundColor: 'whitesmoke',
        height: 210,
        width:340,
        borderRadius: 10,
        elevation: 20,
        borderColor: 'lightgrey',
        shadowColor: 'black',
        borderWidth: 2,
        paddingLeft: 10,
        paddingTop: 15
      },

      down:{
          position: 'absolute',
          right: 15,
          top: 20
      },

      world:{
          right: -155,
          top: -73
      },

      user:{
          flexDirection: 'row',
          justifyContent: 'space-between'
      },

    like:{
        top: -20,
        paddingLeft: 8
    },

    comment:{
        top: -20,
    },

    share:{
        top: -20,
        paddingRight: 15
    }
})