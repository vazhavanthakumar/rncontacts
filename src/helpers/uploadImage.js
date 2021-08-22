import storage from '@react-native-firebase/storage';

export default file => onSuccess => onError => {
  const path = 'contact-picture/user/777' + generateId();
  console.log('path :>> ', path);
  const ref = storage().ref(path);
  const task = ref.putFile(file.path);

  task
    .then(async () => {
      const url = await ref.getDownloadURL();
      onSuccess(url);
    })
    .catch(error => {
      onError(error);
    });
};

function generateId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
