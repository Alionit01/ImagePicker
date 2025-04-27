import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, ImageSource } from 'expo-image'

type props = {
    imgSource: ImageSource
}

export default function imageViewer (imageSource: props) {
  return (
    <Image source={imageSource}  style={styles.image}/>
  )
}


const styles = StyleSheet.create({
    image:{
        width: 320,
        height: 440,
        borderRadius: 18, 
    }
})