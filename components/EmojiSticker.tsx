import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { AnimatedImage } from 'react-native-reanimated/lib/typescript/component/Image';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'


type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {

    const scaleImage = useSharedValue(imageSize);
    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value),
        };
    });
    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2;
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2);
            }
        })


    return (
        <View style={{ top: -350 }}>
            <GestureDetector gesture={doubleTap}>
            <AnimatedImage
                source={stickerSource}
                resizeMode="contain"
                style={[imageStyle, { width: imageSize, height: imageSize }]}
            />
            </GestureDetector>
        </View>
    );
}
