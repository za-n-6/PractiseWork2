import React from "react";
import { TextInput, Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      name: "",
      gender: "",
      city: "",
    };
  }
  submit() {
    console.warn(this.state);
  }
  validate = (value) => {
    console.log(value);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(value) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: value });
      return false;
    } else {
      this.setState({ email: value });
      console.log("Email is Correct");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          label="Name"
          value={this.state.name}
          onChangeText={this.setState.name}
          required
          mode="outlined"
          style={{
            top: 10,
            width: "90%",
            paddingLeft: 10,
            paddingBottom: 8,
          }}
        />

        <TextInput
          label="Email"
          value={this.state.email}
          onChangeText={this.setState.email}
          required
          mode="outlined"
          style={{
            top: 10,
            width: "90%",
            paddingLeft: 10,
            paddingBottom: 8,
          }}
        />
        <TextInput
          label="Password"
          value={this.state.password}
          onChangeText={this.setState.password}
          required
          secureTextEntry={true}
          mode="outlined"
          style={{
            top: 10,
            width: "90%",
            paddingLeft: 10,
            paddingBottom: 8,
          }}
        />
        <TextInput
          label="Gender"
          value={this.state.gender}
          onChangeText={this.setState.gender}
          required
          mode="outlined"
          style={{
            top: 10,
            width: "90%",
            paddingLeft: 10,
            paddingBottom: 8,
          }}
        />
        <Searchbar
          placeholder="Search City"
          onChangeText={this.state.city}
          value={this.setState.city}
          required
          style={{
            top: 10,
            width: "90%",
            paddingLeft: 10,
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
