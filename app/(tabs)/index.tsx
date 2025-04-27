import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/button";

const PlaceholderImage = require('@/assets/images/background-image.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.Imagecontainer}>
      <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo"/>
        <Button label="Use this photo"/>  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  Imagecontainer: {
    flex: 1,
  },
  text: {
    color: '#fff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
