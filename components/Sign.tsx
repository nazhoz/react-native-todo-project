import { StyleSheet, Text, View, TextInput, Button, Image,KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';

const Sign = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = () => {
    if (!email || !password || !confirmPassword) {
      setErrorMessage('All fields are required');
    } else if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      setErrorMessage(''); 
    }
  };

  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <Image source={require('../images/login.png')} style={{ width:'50%'}}></Image>
        {/* <Text style={styles.title}>Sign Up</Text> */}
        </View>
        <KeyboardAvoidingView style={styles.full}>
    <View style={styles.contain}>
    <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='black'
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor='black'
    />
    </View>
    <View>
    {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
    <Button  title="Log In" onPress={handleSignUp} />
    </View>
    </KeyboardAvoidingView>
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  contain:{
    width:'100%',
    // backgroundColor:'yellow',
    height:280,
    justifyContent:'space-around'
  },
  head:{
    // backgroundColor:'yellow',
    width:'100%',
    alignItems:'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color:'black'
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color:'black'
  },
  error: {
    color: 'red',
    marginBottom: 15,
  },
  full:{
    width:'100%'
  },
});

export default Sign;
