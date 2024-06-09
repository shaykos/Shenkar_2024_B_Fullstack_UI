import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Login() {
  const navigation = useNavigation();

  function login() {
    //after all the logic... 
    navigation.navigate('AdminNavigation');
  }

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button title='Register' onPress={() => navigation.navigate('Register')}/>
      <Button title='Login As Admin' onPress={() => login()}/>
      <Button title='Login As Client' onPress={() => useNavigation('ClientTabs')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
