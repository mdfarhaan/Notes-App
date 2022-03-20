import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {hp} from '../utils/useScreen';
import {storeData, getData} from '../utils/storage';

const AddNote = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNoteHandler = async () => {
    const data = await getData('notes');
    if (data) {
      const {notes} = JSON.parse(data);
      const currentNote = JSON.stringify({
        notes: [{title: title, content: content}, ...notes],
      });
      await storeData('notes', currentNote);
    } else {
      const note = JSON.stringify({
        notes: [{title: title, content: content}],
      });
      await storeData('notes', note);
    }
    navigation.navigate('Notes');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.titleInput}
        onChangeText={e => setTitle(e)}
        value={title}
        placeholder="Title"
        placeholderTextColor="black"
        keyboardType="default"
      />
      <TextInput
        style={styles.descInput}
        onChangeText={e => setContent(e)}
        value={content}
        multiline={true}
        placeholder="content"
        placeholderTextColor="black"
        keyboardType="default"
      />
      {content.length > 0 && (
        <View style={styles.footer}>
          <TouchableHighlight
            onPress={addNoteHandler}
            style={styles.btn}
            underlayColor="#191919">
            <Text style={styles.btnText}>Add Note</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    height: '100%',
  },
  titleInput: {
    marginTop: 12,
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  descInput: {
    height: '78%',
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 20,
    textAlignVertical: 'top',
  },
  footer: {
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'black',
    borderRadius: 8,
    justifyContent: 'center',
    height: hp(50),
    width: '95%',
  },
  btnText: {
    fontSize: hp(23),
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
