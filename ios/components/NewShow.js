import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class NewShow extends React.Component {
  static navigationOptions = {
    title: 'Create New Show'
  };
  render() {
    // const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text>CREATE NEW SHOW</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({});

export default NewShow;