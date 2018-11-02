//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class ComeOnBabe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Nothing in your eyes</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ComeOnBabe;
