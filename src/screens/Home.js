import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {NoteCard} from '../components';
import {getData} from '../utils/storage';
import {useFocusEffect} from '@react-navigation/native';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);

  const getNotesData = async () => {
    const curObj = await getData('notes');

    if (curObj) {
      const {notes} = JSON.parse(curObj);
      setData(notes);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getNotesData();
    }, []),
  );

  return (
    <View style={styles.container}>
      {data.length !== 0 ? (
        <FlatList
          contentContainerStyle={{
            alignItems: 'center',
          }}
          data={data}
          numColumns={1}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('View', {
                    note: item,
                  })
                }>
                <NoteCard note={item} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: '900', fontSize: 20, margin: 10}}>
            No Notes
          </Text>
        </View>
      )}

      <TouchableHighlight
        onPress={e => navigation.navigate('Create Note')}
        style={styles.action}
        underlayColor="#191919">
        <Image source={require('../assets/add.png')} />
      </TouchableHighlight>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    height: '100%',
  },
  action: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#000',
    bottom: 0,
    right: 0,
    margin: 16,
    padding: 10,
    borderRadius: 50,
  },
});
