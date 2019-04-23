/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import verticalScale from '../../helper/scale'
import styles from './style'
const { width, height } = Dimensions.get('window');
var Carousel = require('react-native-carousel');
type Props = {};
export default class IntroductionScreen extends Component<Props> {
    
    render() {
        return (
            <View style={styles.container}>
                {/* <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            /> */}
                <View style={{ flex: 0.6 }}>
                    <Swiper style={{}} showsButtons={true} width={width} paginationStyle={{ position: 'absolute', bottom: verticalScale(10) }}  >
                        <View >
                            <Image
                                source={require('../../../assets/background_Image/dummy.jpg')}
                                style={{ width: width }}
                            />
                        </View>
                        <View>
                            <Image
                                source={require('../../../assets/background_Image/dummy.jpg')}
                                style={{ width: width }}
                            />
                        </View>
                        <View>
                            <Image
                                source={require('../../../assets/background_Image/dummy.jpg')}
                                style={{ width: width }}
                            />
                        </View>
                    </Swiper>
                </View>
                <View style={{ alignContent: 'center', flex: 0.5 }}>
                    <Text style={{ color: "rgb(60,203,206)", fontSize: 25, textAlign: 'center', padding: 10, marginTop:20 }}>Login with your Facebook account.This doesn't post anything to Facebook.</Text>
                    <TouchableOpacity
                        style={{ backgroundColor: 'rgb(61,107,173)', marginHorizontal: 30, marginVertical: 30, alignItems: 'center', padding: 20, borderRadius: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight:'800' }}>Login with Facebook</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ color: "grey", fontSize: 20, textAlign: 'center', padding: 10 }}>This doesn't post anything to Facebook.</Text>
                    </View>
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    corouselContainer: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },

});
