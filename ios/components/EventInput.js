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
  DatePickerIOS,
  Modal
} from 'react-native';

class EventInput extends React.Component {
  static navigationOptions = {
    title: 'Create New Show'
  };
  constructor() {
    super()
    this.state = {
      modalVisible: false
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    // const event = this.props.navigation.state.params;
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Event Details</Text>

        <View>
          <Text style={styles.text}>Address</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <View>
            <DatePickerIOS
              date={new Date()}
              mode='time'
            />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.event}>
          <Text style={styles.text}>Show Time</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <View>
            <DatePickerIOS
              date={new Date()}
              mode='time'
            />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.event}>
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.event}>
          <Text style={styles.text}>Set Duration</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <View>
            <DatePickerIOS
              date={new Date()}
              mode='time'
            />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.event}>
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.event}>
          <Text style={styles.text}>Load In</Text>
        </TouchableHighlight>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={styles.container}>
            <View>
            <DatePickerIOS
              date={new Date()}
              mode='time'
            />
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                style={styles.event}>
                <Text style={styles.text}>Submit</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
          style={styles.event}>
          <Text style={styles.text}>Sound Check</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('FlightInput')}>
          <Text onPress={() => this.props.navigation.navigate('FlightInput')} style={styles.text}>Next</Text>
        </TouchableHighlight>

      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  input: {
    height: 50,
    width: 300,
    borderBottomWidth: 1,
    borderColor: '#2F6386',
    padding: 5,
    borderRadius: 5,
    opacity: 0.9,
    alignSelf: 'center',
    fontSize: 20
  },
  text: {
    fontSize: 20,
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center'
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

export default EventInput;