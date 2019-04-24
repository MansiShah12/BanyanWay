/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './style'
import scale from '../../util/scale';
const { width, height } = Dimensions.get('window');
const array = [1, 2, 3];
type Props = {};
export default class IntroductionScreen extends Component<Props> {

    constructor() {
        super();

    }

    renderSwiperView() {
        return (
            <Swiper style={{}} showsButtons={false} width={width} paginationStyle={{ position: 'absolute', bottom: scale(15) }}  >
                {array.map((item, index) => {
                    return (
                        <View key={index} >
                            <Image
                                source={require('../../../assets/background_Image/dummy.jpg')}
                                style={{ width: width }}
                            />
                        </View>
                    );
                })}
            </Swiper>
        );
    }

    renderBottomView() {
        return (
            <View style={{ alignContent: 'center' }}>
                <View style={{ flex: 0.5, marginTop: scale(20) }} >
                    <Text style={styles.label1}>Login with your Facebook account.This doesn't post anything to Facebook.</Text>
                </View>
                <View style={{ flex: 0.5, top: scale(30) }}>
                    <TouchableOpacity
                        style={styles.facebookButton}>
                        <Image
                            source={require('../../../assets/fbIcon/fbIcon.png')}
                            style={{ width: scale(65), height: scale(65), borderRadius: scale(5) }}
                        />
                        <Text style={styles.LoginwithFacebookText}>Login with Facebook</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: scale(5) }}>
                        <Text style={styles.label2}>This doesn't post anything to Facebook</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 0.5 }}>
                    {this.renderSwiperView()}
                </View>
                <View style={{ flex: 0.5 }}>
                    {this.renderBottomView()}
                </View>
            </View>
        );

    }
}

