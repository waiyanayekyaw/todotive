import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-paper';

const All = ({
  task,
  setTask,
  taskItems,
  addTask,
  deleteTask,
  completedTask,
}) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.taskInput}>
        <TextInput
          style={styles.input}
          placeholder="Add your task....."
          placeholderTextColor="#c0c0c0"
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={addTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.tasksContainer}>
        <Text style={styles.sectionTitle}>Todotive</Text>

        <FlatList
          style={{marginBottom: 60}}
          data={taskItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ScrollView>
              <View>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => completedTask(item.id)}>
                  <View style={styles.itemLeft}>
                    <View
                      style={[
                        styles.square,
                        {opacity: item.completed ? 0.3 : 0.8},
                      ]}></View>

                    <Text
                      style={[
                        styles.itemText,
                        {
                          textDecorationLine: item.completed
                            ? 'line-through'
                            : 'none',
                          opacity: item.completed ? 0.3 : 1,
                        },
                      ]}>
                      {item.text}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={styles.trash}
                    onPress={() => deleteTask(item.id)}>
                    <Icon source="trash-can" size={20} color="#ff6e7c" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </View>
            </ScrollView>
          )}
        />
      </View>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  taskInput: {
    width: '100%',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: 280,
    padding: 15,
    marginLeft: 10,
    color: '#c0c0c0',
    backgroundColor: '#fff',
    fontSize: 16,
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 55,
    height: 55,
    marginRight: 10,
    backgroundColor: '#b691ff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    color: '#fff',
    fontSize: 25,
  },
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#8d54ff',
    opacity: 0.7,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    maxWidth: '80%',
  },
  trash: {
    width: 40,
    padding: 10,
    alignItems: 'center',
  },
});
