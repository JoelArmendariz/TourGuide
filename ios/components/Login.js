import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
  TextInput,
  ImageBackground
} from 'react-native';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      show: true
    }
    this.toggleShow = this.toggleShow.bind(this)
  }

  toggleShow () {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.text}>USERNAME</Text>
          <TextInput style={styles.input}></TextInput>
          <View style={styles.passwordContainer}>
            <Text style={styles.text}>PASSWORD</Text>
          <View style={styles.showContainer}>
            <Text onPress={this.toggleShow} style={styles.show}>Show</Text>
          </View>
          </View>
          <TextInput secureTextEntry={this.state.show} style={styles.input}></TextInput>
          <View style={styles.loginContainer}>
            <TouchableHighlight style={styles.event} onPress={() => this.props.navigation.navigate('HomeRoute')}>
              <Text onPress={() => this.props.navigation.navigate('HomeRoute')} style={styles.login}>></Text>
            </TouchableHighlight>
          </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FB7F2',
    paddingTop: 120,
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  show: {
    alignSelf: 'flex-end',
    marginLeft: 230,
    fontSize: 12,
    color: 'white'
  },
  event: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 30,
    marginRight: 25,
    backgroundColor: 'white',
    opacity: 0.5,

  },
  text: {
    fontSize: 13,
    color: 'white',
    marginLeft: 35,
    marginTop: 5,
    fontWeight: 'bold'
  },
  login: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5FB7F2',
    alignSelf: 'center'
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 35,
    marginLeft: 33,
  },
  input: {
    marginBottom: 15,
    height: 50,
    width: 350,
    borderBottomWidth: 1,
    borderColor: 'white',
    padding: 5,
    borderRadius: 5,
    opacity: 0.9,
    color: 'white',
    alignSelf: 'center'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Login;