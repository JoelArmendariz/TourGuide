import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableHighlight,
  DatePickerIOS
} from 'react-native';

class NewShow extends React.Component {
  static navigationOptions = {
    title: 'Create New Show'
  };
  render() {
    // const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.text}>Add a Date</Text>
        </View>
        <DatePickerIOS
          date={new Date()}
          mode='date'
        />
        <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('EventInput')}>
          <Text onPress={() => this.props.navigation.navigate('EventInput')} style={styles.text}>Next</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    marginBottom: 15,
    height: 50,
    width: 350,
    borderBottomWidth: 1,
    borderColor: '#2F6386',
    padding: 5,
    borderRadius: 5,
    opacity: 0.9,
    color: 'white',
    alignSelf: 'center'
  },
  text: {
    fontSize: 20
  },
  event: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#5FB7F2',
    height: 50,
    width: 175,
    borderRadius: 25
  },
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200
  }
});

export default NewShow;