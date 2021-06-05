import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Forum extends React.Component {

  render(){
    return(
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <WebView 
                source= {{uri: 'https://www.linkedin.com'}}
                style= {styles.loginWebView}
            />
        </View>
    );
}

 
  
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
  },
  loginWebView: {
      flex: 1,
      marginTop: 30,
      marginBottom: 20
  }
});
