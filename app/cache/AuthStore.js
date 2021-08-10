import AsyncStorage from "@react-native-community/async-storage";

const key = "xtranetAuthKey";

const saveXtranettUser = async (userData) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(userData));
    console.log("User saves successfully");
  } catch (e) {}
};

const getUserXtranetUser = async () => {
  try {
    const userDat = await AsyncStorage.getItem(key);
    return JSON.parse(userDat);
  } catch (error) {}
};

export default {
  getUserXtranetUser,
  saveXtranettUser,
};
