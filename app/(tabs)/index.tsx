import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from 'expo-image';
import ImageViewer from "@/components/imageViewer";
import Button from "@/components/button";
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiPicker from "@/components/EmojiPicker";
import { type ImageSource } from 'expo-image';
import EmojiList from '@/components/EmojiList';
import EmojiSticker from '@/components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji,setPickedEmoji] = useState<ImageSource | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // ['images']
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {   //Checks if the user actually selected an image
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  
  const onReset = () =>{
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return ( 
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.Imagecontainer}>
      <ImageViewer imageSource={PlaceholderImage} selectedImage={selectedImage}/>
      {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
      </View>
       {showAppOptions ? (
         <View style={styles.optionsContainer}>
         <View style={styles.optionsRow}>
           <IconButton icon="refresh" label="Reset" onPress={onReset} />
           <CircleButton onPress={onAddSticker} />
           <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
         </View>
       </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
      <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </GestureHandlerRootView>
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
