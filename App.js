import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image source={require("./assets/squareprofile.png")} style={styles.photo} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameAndPronouns}>Jonathan! (he/him)</Text>
      </View>
      <ScrollView style={styles.blurbContainer}>
        {/* <Text style={styles.blurb}>I am currently a recent Computer Science graduate from Rio Hondo College who will be transferring to UCLA in Fall 2022.</Text>
        <Text style={styles.blurb}>I am passionate about pursuing my major in Software Development and Computer Science.</Text> 
        <Text style={styles.blurb}>This summer, I will be participating, as one of the 15 selected scholars, in the Snap Engineering Academy hosted by Snap Inc. at it’s headquarters in Santa Monica, CA.</Text> 
       */}
        <Text style={styles.blurb}>
        I am currently a recent Computer Science graduate from Rio Hondo College who will be transferring to UCLA in Fall 2022. 
        I am passionate about pursuing my major in Software Development and Computer Science. 
        This summer, I will be participating, as one of the 15 selected scholars, in the Snap Engineering Academy hosted by Snap Inc. at it’s headquarters in Santa Monica, CA.
        </Text>
        <Text></Text>
        <Text style={styles.blurb}>
        I enjoy creating opportunities out of misfortunes, researching and developing new technologies, designing software applications for various platforms. 
        After interning with NASA last summer, I learned how to use microelectronics and software development tools to leverage existing technologies to solve problems affecting our communities. 
        This summer within the Snap Engineering Academy, I will continue to learn and develop my skills in software engineering! 
        </Text>
        <Text></Text>
        <Text style={styles.blurb}>
        I am passionate about leveraging technology, advancing my skills, and creating new innovations.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00a6b5",
    padding: 30,
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2f80b0",
  },
  blurbContainer: {
    flex: 4,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#4f569f",
  },
  photo: {
    resizeMode: "contain",
    width: "100%",
    padding: 50,
  },
  nameAndPronouns: {
    fontSize: 40,
    color: "white",
  },
  blurb: {
    fontSize: 20,
    color: "white",
  },
});
