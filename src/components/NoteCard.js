import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../utils/useScreen';

const Card = ({note}) => {
  return (
    <View style={styles.container}>
      {note.title !== '' && <Text style={styles.title}>{note.title}</Text>}

      <Text style={styles.text}>{note.content}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    width: wp(330),
    maxHeight: hp(150),

    margin: 5,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    fontSize: wp(15),
  },
});
