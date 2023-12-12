import React, { memo, useEffect, useMemo, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/theme";
import { getScaledFontSize } from "../utils/globalFunctions";


function TimerComponent({ time,isFormatted }) {

    const [formattedTime, setFormattedTime] = useState('')

    useEffect(() => {
        if(isFormatted){
            getFormattedTime(time)
        }
    }, [time])

    const getFormattedTime = (seconds) => {
        let numSeconds = seconds;
        let hours = Math.floor(numSeconds / 3600);
        numSeconds -= hours * 3600;
        let minutes = Math.floor(numSeconds / 60);
        numSeconds -= minutes * 60;
        setFormattedTime(`${hours > 9 ? hours : '0' + hours}:${minutes > 9 ? minutes : '0' + minutes}:${numSeconds > 9 ? numSeconds : '0' + numSeconds}`)
    }

    return (
        <View style={styles.fullContainer}>
            <Text style={styles.timerText}>
                {isFormatted?formattedTime:time}
            </Text>
        </View>
    )
}

export default memo(TimerComponent)

export const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
        alignItems:'center',
        borderWidth: 1,
        padding:10,
        borderColor: colors.grey
    },
    timerText: {
        color: colors.darkGrey,
        fontSize: getScaledFontSize(16)
    }
})