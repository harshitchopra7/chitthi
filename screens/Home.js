import React, { useLayoutEffect } from 'react';
import { SafeAreaView,  ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import CustomListItem from '../components/CustomListItem';
import { auth, db } from '../firebase';

const Home = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Chitthi',
            headerStyle: { backgroundColor: '#fff' },
            headerTitleStyle: { color: 'black'},
            headerTintColor: 'black',
            headerLeft: () => <View style={{ marginLeft: 15 }}>
                <TouchableOpacity>
                    <Avatar
                        rounded
                        source={{ uri: auth?.currentUser?.photoURL}}
                    />
                </TouchableOpacity>
                
            </View>,
        })
    }, [])

    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem /> 
            </ScrollView>
        </SafeAreaView>
    );
}
export default Home;

const styles = StyleSheet.create({

})
