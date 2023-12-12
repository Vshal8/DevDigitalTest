import React, { memo, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../utils/theme";
import { getScaledFontSize } from "../utils/globalFunctions";


function TimerInputComponent({ time, onValueChange }) {


    return (
        <View style={styles.fullContainer}>
            <TextInput
                value={time}
                onChangeText={onValueChange}
                style={styles.timerText}
                keyboardType='numeric'
                />
        </View>
    )
}

export default memo(TimerInputComponent)

export const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.grey
    },
    timerText: {
        color: colors.darkGrey,
        fontSize: getScaledFontSize(16)
    }
})