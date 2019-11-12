import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList
} from 'react-native';
// import { Icon } from 'react-native-elements'

import data from '../../mock-data';
import Date from './Date'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    // headerLeft: (
    //   <Icon name='menu' type='ionicon' />
    // )
  };
  constructor() {
    super()
    this.state = {
      dates: data
    }
    this.navigate = this.navigate.bind(this);
  }

  navigate() {
    this.props.navigation.navigate('EventSelect', item)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Upcoming Shows</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.dates}
            renderItem={({item, index}) => <Date navigation={this.props.navigation} date={item}></Date>}
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
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    width: 370,
    borderColor: '#8FAADE',
    // borderBottomWidth: 1,
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // marginTop: 5,
    // backgroundColor: 'white'
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