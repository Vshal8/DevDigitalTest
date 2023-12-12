import { PixelRatio } from "react-native";


export function getScaledFontSize(size){
    return PixelRatio.roundToNearestPixel(size/PixelRatio.getFontScale())
}