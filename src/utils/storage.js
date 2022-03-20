import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch (err) {
    console.log(err);
  }
};

export const getData = async key => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    console.log(err);
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (err) {
    console.log(err);
  }
};
