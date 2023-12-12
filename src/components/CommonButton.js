import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { getScaledFontSize } from "../utils/globalFunctions";
import { colors } from "../utils/theme";


function CommonButton({ buttonTitle, onButtonPress, customButtonStyles }) {
    return (
        <TouchableOpacity style={styles.buttonContainer(customButtonStyles)} onPress={onButtonPress} >
            <Text style={styles.buttonText}>
                {buttonTitle}
            </Text>
        </TouchableOpacity>
    )
}

export default memo(CommonButton)

const styles = StyleSheet.create({
    buttonContainer: (customButtonStyles) => {
        return {
            alignItems: 'center',
            backgroundColor:colors.primaryColor,
            ...customButtonStyles
        }
    },
    buttonText:{
        fontSize:getScaledFontSize(16),
        color:colors.white
    }
})