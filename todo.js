import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React , {useState} from 'react';
import {Alert} from 'react-native';


const MyApp = (props) => {

  const[visible,setvisible]=useState(true);

  const removeBox = () => {
    Alert.alert('Remove Activity','Do you want to delete?',
      [
        {text:'Cancel', onPress:()=>setvisible(true)},
        {text:'Ok', onPress:()=>setvisible(false)},
        
      ]
    );
  };
  return (
   <View>
    {visible && (

      <View style={styles.box}>
        <Text style={styles.sq}></Text>
        <Text style={styles.matter}>{props.text}</Text>
        <TouchableOpacity onPress={removeBox}> 
       <Image
        source={require('../assets/dustbin.jpg')}
        style={styles.bin}
        />
        </TouchableOpacity>
      </View>

    )}
    </View>  
  );
};

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderWidth: 1,
    width: '80%',
    height: 'auto',
    margin: 40,
    flexDirection: 'row',
     marginVertical: 6, 
     justifyContent:'flex-start',
    
  },
  matter: {
   
    fontSize: 16,
    marginTop: 11,
    paddingHorizontal:10,
    flex:1,
    marginBottom:8,
  },
  sq: {
    margin:15,
    width:24,
    height:24,
    backgroundColor:'skyblue',
  },
  bin:{
    width:30,
    height:19,
    marginRight:10,
    marginTop:16,
    
  
  }
});

export default MyApp;
