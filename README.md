# React Native Fixed Toast

Install using
`npm i rn-fixed-toast --save`

Implementation
    
    import showToast from "rn-fixed-toast";

And in component render method .. 

    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text
              onPress={() =>
                
                this.setState({
                  toast: showToast("A Toasting for the toast.", 10000)
                });
                
                // You can bind showtoast result to state and toast will appear.
                // The state variable must be rendered in the outer container(Say a View).
                // Params
                //  first:Message for Toast (string)
                //  second:Duration to show toast(number), Optional
              }
              style={styles.instructions}
            >
              Click Me.. !
            </Text>
            {this.state.toast}
            {/*"Don't forget the above line."*/}
          </View>
        );
      }
