import {StyleSheet, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// screens
import AllScreen from './screens/AllScreen';
import ActiveScreen from './screens/ActiveScreen';
import CompleteScreen from './screens/CompleteScreen';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const all = 'All';
  const active = 'Active';
  const complete = 'Complete';

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskItems([
      ...taskItems,
      {id: Date.now(), text: task, completed: false},
    ]);
    setTask(null);
  };

  const deleteTask = id => {
    const updatedTasks = taskItems.filter(t => t.id !== id);
    setTaskItems(updatedTasks);
  };

  const completedTask = id => {
    const updatedTasks = taskItems.map(t =>
      t.id === id ? {...t, completed: !t.completed} : t,
    );
    setTaskItems(updatedTasks);
  };

  return (
    <Tab.Navigator
      initialRouteName={all}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let routeName = route.name;

          if (routeName === all) {
            iconName = focused ? 'tasks' : 'tasks';
          } else if (routeName === active) {
            iconName = focused ? 'smile' : 'smile';
          } else if (routeName === complete) {
            iconName = focused ? 'check-circle' : 'check-circle';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="All" options={{headerShown: false}}>
        {props => (
          <AllScreen
            {...props}
            task={task}
            setTask={setTask}
            taskItems={taskItems}
            addTask={addTask}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Active" options={{headerShown: false}}>
        {props => (
          <ActiveScreen
            {...props}
            taskItems={taskItems}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Complete" options={{headerShown: false}}>
        {props => (
          <CompleteScreen
            {...props}
            taskItems={taskItems}
            deleteTask={deleteTask}
            completedTask={completedTask}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
