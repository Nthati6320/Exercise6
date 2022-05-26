import { StatusBar } from 'react-native';
import { StyleSheet, ScrollView, Text, View, Alert, TouchableOpacity, ImageBackground, Image, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const[array, setArray] = useState([
    {key: 1, name: 'Psalm 27:10-14'},
    {key: 2, name: 'Matthew 7:1-14'},
    {key: 3, name: 'Proverbs 14:9'},
    {key: 4, name: 'Psalm 88'},
    {key: 5, name: 'Proverbs 14:20-30'},
  ])
  
  
  return (
    <ImageBackground source={require('./assets/ballon.jpg')} style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{fontWeight: '700', fontSize: 17, marginBottom: 10, marginTop: 20, color: 'white'}}>OUR IDENTITY IN CHRIST</Text>
      
      <View style={styles.shape1}>
        <TouchableOpacity><View style={styles.menu}><Feather name="menu" size={30} color="white" /></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.friends}><FontAwesome5 name="user-friends" size={30} color="white" /></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.add}><Entypo name="add-user" size={30} color="white" /></View></TouchableOpacity>
        <TouchableOpacity><View style={styles.more}><Feather name="more-vertical" size={30} color="white" /></View></TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image source={require('./assets/happy.jpg')}
          style={{height: 70, width: 70, borderRadius: 35, top: 18, left: 15}}/> 
        
        <TextInput style={{height: 50, width: 200, borderRadius: 30, borderWidth: 1, borderColor: 'lightgrey', right: -95, top: -40, paddingLeft: 15, }} placeholder="Write Something......" placeholderTextColor={"white"} />
      </View>
      <ScrollView style = {styles.body}>
        <View style = {styles.body}>
            {array.map((item) => {
              const [likes, setLikes] = useState(0);
              const [colors, setColors] = useState('ghostwhite');
              function Adder(){
                setLikes(likes + 1)
                setColors('lightblue')
              }
              return(
                <View style = {[styles.item, {justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000050'}]} key = {item.key}>
                  <Text style = {{color: '#fff'}}>{item.name}</Text>
                  <TouchableOpacity onPress={Adder} style={styles.like}>
                    <Text style = {{marginHorizontal: 6,color: 'whitesmoke', fontWeight: 'bold', fontSize: 20}}>{likes}</Text>
                    <AntDesign name="like1" size={24} color = {colors} />
                  </TouchableOpacity>
                </View>
              )
            })}
        </View>
      </ScrollView>
      <TouchableOpacity style = {{ borderRadius: 10, marginVertical: 15, height: 40, width: 80, backgroundColor: 'whitesmoke', justifyContent: 'center', alignItems: 'center'}}>
          <Text style = {{color: '#111', fontWeight: 'bold'}}>
            POST
          </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  body: {
    flex: 5,
    width: '100%',
    borderRadius: 20,
    paddingLeft: 17
  },
  shape1:{
    height: 60,
    width: 360,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  like: {
    borderTopWidth: 1,
    width: 298,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 360,
    height:110,
  },
  item: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    width: 300,
    marginVertical: 10,
    height: 80,
  }
});
