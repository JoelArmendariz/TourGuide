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

class Date extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View>
        <TouchableHighlight style={styles.container} onPress={() => this.props.navigation.navigate('EventSelect', this.props.date)}>
          <Text style={styles.text}>{this.props.date.date}</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 65,
    width: 375,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4899D0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 10
  },
  text: {
    fontSize: 21
  }
});

export default Date;