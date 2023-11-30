import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-paper';

const Active = ({taskItems, deleteTask, completedTask}) => {
  const activeTasks = taskItems.filter(taskItem => !taskItem.completed);
  return (
    <View>
      <FlatList
        style={{padding: 20}}
        data={activeTasks}
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
  );
};

export default Active;

const styles = StyleSheet.create({
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
