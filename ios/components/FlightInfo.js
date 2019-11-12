import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class FlightInfo extends React.Component {
  static navigationOptions = {
    title: 'Flight Info'
  };
  render() {
    const event = this.props.navigation.state.params;
    if(event.flight) {
      return (
        <View style={styles.container}>
          <Text style={styles.date}>Date: { event.date }</Text>
          <View style={styles.flightContainer}>
            <Text style={styles.text}>Flight Number: { event.flight.flightNumber }</Text>
            <Text style={styles.text}>Flight Departure: { event.flight.departure }</Text>
            <Text style={styles.text}>Flight Arrival: { event.flight.arrival }</Text>
            <Text style={styles.text}>Airport: { event.flight.airport }</Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.noFlight}>
          <Text style={styles.text}>NO FLIGHT INFO</Text>
        </View>
      );
    }

  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    margin: 15,
    marginLeft: 20
  },
  noFlight: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 20
  },
  date: {
    fontSize: 30
  },
  flightContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 23,
  }
});

export default FlightInfo;