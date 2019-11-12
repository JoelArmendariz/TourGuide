import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight
} from 'react-native';

class EventSelect extends React.Component {
  render() {
    const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('EventInfo', event)}>
          <Text style={styles.text}>Event</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('FlightInfo', event)}>
          <Text style={styles.text}>Flight</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('HotelInfo', event)}>
          <Text style={styles.text}>Hotel</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
  },
  event: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5FB7F2',
    height: 50,
    width: 175,
    borderRadius: 25
  },
  text: {
    fontSize: 20
  }
});

export default EventSelect;