
import {ScrollView, StatusBar,StyleSheet, Text, View ,Platform,KeyboardAvoidingView,TextInput,TouchableOpacity} from 'react-native';
import MyApp from './components/todo'; 
import React,{useState} from 'react';

export default function App() {
   const [task, setTasks] = useState();
  const [taskItems,setTaskItems]=useState([]);

  const handleAdd = () => {
    if(task!=null){
    setTaskItems([...taskItems,task]);
    setTasks(null);
    }
  };
  return (
    
    <View style={styles.container}>
    <Text style={styles.head}>To-Do List App</Text>
    <ScrollView style={styles.tasksContainer}>
      {taskItems.map((item)=>{
          return <MyApp text={item}/>
        })}
    </ScrollView>
     
     
      <StatusBar style="auto" />
        
  
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}   keyboardVerticalOffset={100}>

      <View style={styles.bottom}>
        <TextInput
          style={styles.input}
          placeholder="Write a task here..."
          value={task}
          onChangeText={(text) => setTasks(text)}
        />
        <TouchableOpacity onPress={() => handleAdd()}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
        </View>
   
    </KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  input: {
   
    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 15,
    width: '80%',
     minHeight: 45, // Minimum height
      maxHeight: 100,
   
  },
   plus: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderRadius: 50,
    height: 50,
    width: 50,
    textAlign: 'center',
    paddingTop: 4,
    fontSize: 25,
  },
   bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,
    paddingLeft: 40,
  },
   head: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 50,
    fontWeight: 'bold',
  },
   tasksContainer: {
      flexGrow: 1,
      width: '100%',
      height:'80%', 
      marginTop: 20,
   },
});
