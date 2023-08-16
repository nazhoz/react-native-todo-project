import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const Tasks = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        {/* <View style={styles.square}></View> */}
        <Image style={styles.square} source={require('../images/checklist.png')}></Image>
        <Text style={styles.itemtext}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.circular}>
          <Image source={require('../images/trash.png')}></Image>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  itemtext: {
    color: 'black',
    maxWidth: '80%',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    opacity: 0.2,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {

  },
});

