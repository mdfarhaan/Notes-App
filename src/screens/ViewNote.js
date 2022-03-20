import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
// import {wp, hp} from '../utils/useScreen';

const ViewNote = ({route, navigation}) => {
  const {note} = route.params;

  return (
    <View style={styles.container}>
      {note.title !== '' && <Text style={styles.title}>{note.title}</Text>}
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.content}>{note.content}</Text>
      </ScrollView>
    </View>
  );
};

export default ViewNote;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: '100%',
  },
  title: {
    marginTop: 20,
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  contentContainer: {
    height: '100%',
  },
  content: {
    marginTop: 10,
    padding: 10,
    fontSize: 22,
    color: 'black',
  },
});
