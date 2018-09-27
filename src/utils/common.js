import { AsyncStorage } from 'react-native';

export const noop = () => {};

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    alert(error);                                           //eslint-disable-line
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    // Error retrieving data
    alert('error');  //eslint-disable-line
    return 'error';
  }
};


export const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    alert(error);    //eslint-disable-line
  }
};


export const transformPOSTpayload = (payload) => {
  const formBody = Object.keys(payload).map((field) => {
    const encodedKey = encodeURIComponent(field);
    const encodedValue = encodeURIComponent(payload[field]);
    return (`${encodedKey}=${encodedValue}`);
  });

  return formBody.join('&');
};
