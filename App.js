import { useState, useEffect, useRef } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, ScrollView, Alert, Pressable, ToastAndroid } from 'react-native';
import Task from './components/Task';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles/mainStyle.js';
import DropDown from './components/DropDown';
import { useFonts } from 'expo-font';


export default function App() {

  const [tasks, setTasks] = useState('');
  const [taskItemFromStorage, setTaskItemFromStorage] = useState([]);


  const colorScheme = {
    work: '#40E0D0',
    college: '#41AAA8',
    home: '#87C0CD',
    personal: '#73CFF0',
    others: '#142850'
  }

  const mainGroupList = [
    {
      name: 'All',
      color: '#936DFF',
    },
    {
      name: 'Work',
      color: colorScheme.work,
    },
    {
      name: 'College',
      color: colorScheme.college,
    },
    {
      name: 'Home',
      color: colorScheme.home,
    },
    {
      name: 'Personal',
      color: colorScheme.personal
    },
    {
      name: 'Others',
      color: colorScheme.others,
    },
  ];

  const [group, setGroup] = useState(mainGroupList[mainGroupList.length - 1]);
  const [mainGroup, setMainGroup] = useState(mainGroupList[0]);

  useEffect(() => {
    getTask();
  }, [taskItemFromStorage]);

  // Storing data into local storage
  const storeTask = async (data) => {
    try {
      await AsyncStorage.setItem('tasks', data);
    } catch (e) {
      console.log(e);
    }
  }

  // Getting data from local storage
  const getTask = async () => {
    try {
      const data = await AsyncStorage.getItem('tasks');
      if (data !== null) {
        setTaskItemFromStorage(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  }

  // Adding task to the list
  const handleAddTask = () => {
    if (tasks !== '') {
      const taskItem = {
        group: group,
        text: tasks,
      }
      storeTask(JSON.stringify([...taskItemFromStorage, taskItem]));
      setTasks('');
    } else {
      alertEmptyTask();
    }
  }

  const taskDeleteToast = () => {
    ToastAndroid.showWithGravity(
      'Task deleted',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  }

  // Deleting task from the list
  const handleDeleteTask = (index) => {
    let itemCopy = [...taskItemFromStorage];
    itemCopy.splice(index, 1);
    storeTask(JSON.stringify(itemCopy));
    taskDeleteToast();
  }

  // Alert when an empty task is added
  const alertEmptyTask = () => {
    Alert.alert(
      'Empty Task',
      'Please enter a task',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  }

  let [fontsLoaded] = useFonts({
    'LaBelleAurore-Regular': require('./assets/fonts/LaBelleAurore-Regular.ttf'),
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null
  }


  return (
    <View style={styles.container}>


      {/* Today's task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>To-Do</Text>

        {/* Drop Down Menu */}
        <View>
          <DropDown group={mainGroup} setGroup={setMainGroup} data={mainGroupList} />
        </View>

        {/* Todo Item View */}
        <ScrollView style={styles.items}>

          {/* Task item list */}
          {
            taskItemFromStorage.filter(item => mainGroup.name !== 'All' ? item.group.name === mainGroup.name : item).map((item, index) => {
              return (

                <Pressable key={index} style={{ paddingHorizontal: 10 }} >
                  <Task text={item.text} color={item.group.color} />
                </Pressable>

              )
            })
          }

        </ScrollView>
      </View>


      {/* Bottom input area */}
      <KeyboardAvoidingView
        behavior="height"
        style={styles.inputWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a new task"
          value={tasks}
          onChangeText={(text) => { setTasks(text) }}
          clearButtonMode='always'
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={{ fontFamily: 'OpenSans', fontSize: 18 }}>+</Text>
          </View>
        </TouchableOpacity>

        <DropDown group={group} setGroup={setGroup} data={mainGroupList.filter(item => item.name !== 'All')} />

      </KeyboardAvoidingView>
    </View>
  );
}


