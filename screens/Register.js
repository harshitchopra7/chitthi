import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image, Text } from 'react-native-elements';
import { auth } from '../firebase';

const Register = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Login'
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: imageUrl || 
                        "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        }).catch(error => alert(error.message))
    };   

    return (
        <KeyboardAvoidingView style={styles.container}>
            
                <Image
                    source={{
                        uri: "https://pbs.twimg.com/profile_images/697358954498813952/y3xENhPa.png"
                    }}
                    style={{ width: 200, height: 100 }}
                />

                <Text h4 style={{ margin: 10 }}>
                    Create Account
                </Text>

                <View style={styles.inputContainer}>
                    <Input 
                        placeholder='Full Name' 
                        autoFocus type="text" 
                        value={name}
                        onChangeText={(text) => setName(text)} 
                    />
                    <Input 
                        placeholder='Email' 
                        type="email" 
                        value={email}
                        onChangeText={(text) => setEmail(text)} 
                    />
                    <Input 
                        placeholder='Password' 
                        secureTextEntry
                        type="password" 
                        value={password}
                        onChangeText={(text) => setPassword(text)} 
                    />
                    <Input 
                        placeholder='Image Url (optional)' 
                        type="email" 
                        value={imageUrl}
                        onChangeText={(text) => setImageUrl(text)} 
                        onSubmitEditing={register}
                    />

                </View>

                    <Button 
                        containerStyle={styles.button} 
                        raised
                        onPress={register} 
                        title='Register' 
                    />

        </KeyboardAvoidingView>
    )
}
export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    inputContainer: {
        width: 300
    },
    button: {
        width: 200,
        marginTop: 10
    }
})