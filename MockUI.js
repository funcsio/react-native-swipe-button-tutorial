/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';

function MockUI() {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#f40076', '#df98fa']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[{height: 100, width: 150}, styles.item]}
      />
      <LinearGradient
        colors={['#fd6966', '#fad6a6']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[{height: 100, width: 150}, styles.item]}
      />

      <LinearGradient
        colors={['#df98fa', '#9055ff']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[{height: 50, width: 50}, styles.item]}
      />

      <LinearGradient
        colors={['#737dfe', '#ffcac9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[{height: 50, width: 200, flexGrow: 1}, styles.item]}
      />
      <LinearGradient
        colors={['#737dfe', '#ffcac9']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[{height: 70, width: '40%', flexGrow: 1}, styles.item]}
      />
      <LinearGradient
        colors={['#ff5858', '#ffc8c8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={[styles.item, {height: 70, width: 100, borderRadius: 5}]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    opacity: 0.8,
  },

  item: {
    borderRadius: 5,
    margin: 10,
    opacity: 0.9,
  },
});

export default MockUI;
