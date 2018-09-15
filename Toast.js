//import liraries
import React, { Component } from "react";
import {
  View,
  Animated,
  Text,
  Platform,
  Keyboard,
  StyleSheet
} from "react-native";
import PropTypes from "prop-types";

class Toast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
      fadeOut: new Animated.Value(1),
      enabled: true,
      keyboardOpen: false
    };
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardDidShow = () => {
    this.setState({ keyboardOpen: true });
  };

  _keyboardDidHide = () => {
    this.setState({ keyboardOpen: false });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.toastVisible) {
      this.setState({ enabled: true }, this.fadeOut());
    }
  }

  fadeOut = () => {
    this.state.fadeIn.setValue(1);
    Animated.timing(this.state.fadeIn, {
      toValue: 0,
      duration: this.props.duration,
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
              bottom: this.state.keyboardOpen
                ? Platform.OS === "ios"
                  ? 300
                  : 80
                : 80
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
    return <View style={styles.toastContainer}>{this.renderToast()}</View>;
  }
}

//make this component available to the app
export default Toast;

const styles = StyleSheet.create({
  toastContainer: {
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
    textAlign: "center",
    fontFamily: "lato-regular"
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
  duration: 3000
};
