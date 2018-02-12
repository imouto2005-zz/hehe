import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://stickershop.line-scdn.net/stickershop/v1/product/1136810/LINEStorePC/main@2x.png;compress=true'
    };
    return (
      <Image source={pic} style={{width: 200, height: 200}}/>
    );
  }
}