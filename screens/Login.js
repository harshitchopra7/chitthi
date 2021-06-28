import React, { useEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { auth } from '../firebase';

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser) {
                navigation.replace('Home');
            }
        });

        return unsubscribe;
    }, [])

    const login = () => {
        auth.signInWithEmailAndPassword(email, password).catch(err => alert(err.message))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar style="light" /> */}
            <Image 
                source={{
                    uri: "https://pbs.twimg.com/profile_images/697358954498813952/y3xENhPa.png"
                }} 
                style={{ width: 200, height: 100}}
            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                    autoFocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={login}
                />
            </View>
            <Button containerStyle={styles.button} onPress={login} title='Login' />
            <Button containerStyle={styles.button} type='outline' onPress={() => {
                navigation.navigate('Register')
            }} title='Register' />
        </KeyboardAvoidingView>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: 300,
        marginTop: 30
    },
    button: {
        width: 200,
        marginTop: 10
    },
});