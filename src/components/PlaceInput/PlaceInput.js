import React, { Component } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

class PlaceInput extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = (placeName) => {
    this.setState({placeName})
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          value={this.state.placeName}
          placeholder="An awesome place!"
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
});


export default PlaceInput;