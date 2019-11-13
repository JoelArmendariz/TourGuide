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

class HeaderButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableHighlight onPress={this.navigate} style={styles.headerRightContainer}>
        <Text style={styles.headerRight}>New Show</Text>
      </TouchableHighlight>
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
    width: 100,
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

export default HeaderButton;