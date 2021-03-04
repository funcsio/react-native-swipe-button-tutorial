import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MockUI from './MockUI';
import SwipeButton from './SwipeButton';

const App = () => {
  const [toggleState, setToggleState] = useState(false);

  return (
    <SafeAreaView>
      <View
        style={[
          styles.root,
          {backgroundColor: toggleState ? '#222' : '#ebedee'},
        ]}>
        <MockUI />
        <SwipeButton
          onUnToggle={() => setToggleState(false)}
          onToggle={() => setToggleState(true)}
        />
        <MockUI />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
