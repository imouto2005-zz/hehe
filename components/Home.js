import React from 'react';
import Image from './Image'
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'
import { StackNavigator } from 'react-navigation'
import styled from 'styled-components'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      showBun: false
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={() => this.setState({showBun: !this.state.showBun})}>
          <View>
            <Text style={styles.butan}>{this.state.showBun ? 'No bun' : 'Yes bun'}</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => this.props.navigation.navigate('Details')}>
          <View>
            <Text style={styles.butan2}>Go away!</Text>
          </View>
        </TouchableHighlight>

        {/*<TextInput
           style={{height: 40, width: 300}}
           placeholder="Type here to translate!"
           onChangeText={(text) => this.setState({text})}
         />
         <Text style={{padding: 10, fontSize: 42}}>
           {this.state.text}
         </Text>*/}

        {this.state.showBun && 
          <Image />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  words: {
    color: 'blue',
    fontSize: 20,
    fontWeight: '600'
  },
  butan: {
    width: 150,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#9FCBFFFF',
    borderRadius: 4,
    padding: 10,
    marginBottom: 12
 },
  butan2: {
    width: 150,
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FF9DC6FF',
    borderRadius: 4,
    padding: 10
  }
});
