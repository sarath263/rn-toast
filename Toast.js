//import liraries
import React, { Component } from "react";
import {
  View,
  Animated,
  Text,
  Platform,
  Keyboard,
  StyleSheet,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
      enabled: true,
      keyboardOpen: false
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.toastVisible) {
      this.setState({ enabled: true }, this.fadeOut(nextProps.duration));
    }
  }

  fadeOut = duration => {
    this.state.fadeIn.setValue(1);
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true
    }).start(() => {
      this.setState({ enabled: false });
    });
  };

  renderToast() {
    if (this.state.enabled && this.props.toastVisible && this.props.text) {
      return (
        <Animated.View
          style={[
            {
              opacity: this.state.fadeIn,
              top: 80
            },
            this.props.containerStyle
          ]}
        >
          <Text style={this.props.textStyle}>{this.props.text}</Text>
        </Animated.View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.toastContainer} pointerEvents="none">
        {this.renderToast()}
      </View>
    );
  }
}

//make this component available to the app
export default Toast;

const styles = StyleSheet.create({
  toastContainer: {
    height: deviceHeight,
    width: deviceWidth,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  toastAnimatedView: {
    marginHorizontal: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: "#2d2d2d",
    position: "absolute",
    zIndex: 9999,
    justifyContent: "center"
  },
  toastText: {
    color: "white",
    fontSize: 15,
    alignSelf: "stretch",
    textAlign: "center"
  }
});

Toast.propTypes = {
  containerStyle: PropTypes.any,
  toastOpacity: PropTypes.any,
  text: PropTypes.string,
  textStyle: PropTypes.any,
  toastVisible: PropTypes.bool,
  duration: PropTypes.number
};
Toast.defaultProps = {
  containerStyle: styles.toastAnimatedView,
  textStyle: styles.toastText,
  toastVisible: false,
  duration: 5000
};
