import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Image
} from 'react-native';

class EventInfo extends React.Component {
  static navigationOptions = {
    title: 'Event Info'
  };
  render() {
    const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.date}>Date: {event.date}</Text>
        </View>
        <View style={styles.dateContainer}>
          <Text style={styles.text}>Address: {event.event.address}</Text>
          <Text style={styles.text}>Show Time: {event.event.showTime}</Text>
          <Text style={styles.text}>Set Duration: {event.event.setTime}</Text>
          <Text style={styles.text}>Load In: {event.event.loadIn}</Text>
          <Text style={styles.text}>Soundcheck: {event.event.soundCheck.time}</Text>
          <Text style={styles.text}>Soundcheck Duration: {event.event.soundCheck.duration}</Text>
        </View>
        <View style={styles.setListContainer}>
          <Text style={styles.setList}>Set List:</Text>
        </View>
        <View style={styles.setListContainer}>
          <FlatList
            data={event.event.setList}
            renderItem={({ item, index }) => <Text key={index} style={styles.song}> {item.song} </Text>}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    marginTop: 140,
    marginLeft: 15
  },
  text: {
    fontSize: 20
  },
  dateContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 23,
  },
  date: {
    fontSize: 30
  },
  setListContainer: {
    margin: 10
  },
  setList: {
    fontSize: 25
  },
  song: {
    fontSize: 20,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 10,

  }
});

export default EventInfo;