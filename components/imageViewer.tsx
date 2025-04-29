import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageSource } from 'expo-image'




type props = {
    imageSource: ImageSource,
    selectedImage?: string;
}

export default function imageViewer ({imageSource, selectedImage}: props) {
  const imgSource = selectedImage ? {uri: selectedImage}: imageSource;
  
  return <Image source={imgSource}  style={styles.image}/>
}


const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18, 
    }
})