import React, { useState,useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import Tasks from './components/Tasks';
import AsyncStorage from '@react-native-async-storage/async-storage';




const App = () => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState <string[]> ([]);

  useEffect(() => {
    _retrieveData();
  }, []);

  // const handleAddTask = () => {
  //   if (task.trim() !== '') {
  //     setTaskItems([...taskItems, task]);
  //     setTask('');
  //   }
  // };
  const handleAddTask = () => {
    if (task.trim() !== '') {
      const updatedTasks = [...taskItems, task];
      setTaskItems(updatedTasks);
      setTask('');
      _storeData(updatedTasks);
    }
  };


  const handleDeleteTask = (index: number) => {
    if (index < 0 || index >= taskItems.length) {
      return;
    }  
    const updatedTasks = [...taskItems];
    updatedTasks.splice(index, 1);
    setTaskItems(updatedTasks);
    _storeData(updatedTasks);
  };


  const _storeData = async (tasks: string[]) => {
    try {
      await AsyncStorage.setItem('@MyTasks:key', JSON.stringify(tasks));
    } catch (error) {
      // Handle error
    }
  };

  const _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@MyTasks:key');
      if (value !== null) {
        const savedTasks = JSON.parse(value);
        setTaskItems(savedTasks);
      }
    } catch (error) {
      // Handle error
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Today's Task */}
      <View style={styles.taskWrapper}>
        <View style={styles.todo}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <Image source={require('./images/todo.png')} style={styles.todoimage}></Image>
        </View>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {taskItems.map((taskItem, index) => (
            <Tasks
              key={index}
              text={taskItem}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </View>
      </View>

      {/* Write a task */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder='Write A Task'
          placeholderTextColor='black'
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Image source={require('./images/tab.png')}></Image>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  // scrollViewContainer:{
  //   flexGrow: 1,
  // },
  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  todo:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'yellow',
    height:50,
    
  },
  todoimage:{
    width:30,
    height:30,
    marginRight:10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine:'underline'
  },

  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex:1,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    color: 'black',
  },
  addWrapper: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color:'black',
    fontStyle:'italic',
    fontWeight:'bold'
  },
});

export default App;
