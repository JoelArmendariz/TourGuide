import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

class HotelInfo extends React.Component {
  static navigationOptions = {
    title: 'Hotel Info'
  };
  render() {
    const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.date}>Date: { event.date } </Text>
        <View style={styles.hotelInfo}>
          <Text style={styles.text}>Check In: { event.hotel.checkIn }</Text>
          <Text style={styles.text}>Check Out: { event.hotel.checkOut }</Text>
          <Text style={styles.text}>Room Number: { event.hotel.roomNumber }</Text>
          <Text style={styles.text}>Hotel Address: { event.hotel.address }</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    margin: 25,
    marginLeft: 20
  },
  text: {
    fontSize: 20
  },
  date: {
    fontSize: 30
  },
  hotelInfo: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 23,
  }
});

export default HotelInfo;