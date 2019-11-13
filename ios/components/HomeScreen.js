import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  TouchableHighlight
} from 'react-native';

import data from '../../mock-data';
import Date from './Date'
import HeaderButton from './HeaderButton'

class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Home'
  };
  constructor() {
    super()
    this.state = {
      dates: data
    }
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.props.navigation.navigate('NewShow')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Upcoming Shows</Text>
          <TouchableHighlight onPress={this.navigate} style={styles.headerRightContainer}>
            <Text style={styles.headerRight}>New Show</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.dates}
            renderItem={({item, index}) => <Date key={index.toString()} navigation={this.props.navigation} date={item}></Date>}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  header: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 65,
    width: 370,
    borderColor: '#8FAADE'
  },
  headerRight: {
    fontSize: 15,
    color: '#2F6386'
  },
  headerRightContainer: {
    borderWidth: 1,
    borderColor: '#2F6386',
    height: 30,
    width: 85,
    borderRadius: 10,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20
  },
  text: {
    fontSize: 30
  },
  icon: {
    paddingLeft: 10
  },
  listContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  }
});

export default HomeScreen;