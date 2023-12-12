import React, { memo, useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../utils/theme";
import CommonButton from "./CommonButton";
import TimerComponent from "./TimerComponent";

function CountdownListItem({ item, index }) {
    const [isStarted, setIsStarted] = useState(false)
    const [remainingTime, setRemainingTime] = useState(item.time)


    let interval;
    useEffect(() => {
        if (isStarted) {
            if (remainingTime > 0) {
                interval = setTimeout(() => {
                    let updatedTime = remainingTime
                    updatedTime = updatedTime - 1
                    setRemainingTime(updatedTime)
                }, 1000)
            }
            else {
                setIsStarted(false)
            }
        }
        else {
            clearInterval(interval)
        }
    }, [isStarted, remainingTime])

    function onButtonPress() {
        setIsStarted(!isStarted)
    }

    return (
        <View style={styles.fullContainer}>
            <View style={styles.timerContainer}>
                <TimerComponent time={remainingTime} />
            </View>
            <View style={styles.formattedTimeContainer}>
                <TimerComponent time={remainingTime} isFormatted={true} />
            </View>
            <View style={styles.buttonContainer}>
                <CommonButton buttonTitle={isStarted ? 'Pause' : 'Start'} onButtonPress={onButtonPress} customButtonStyles={styles.buttonStyles} />
            </View>
        </View>
    )
}

export default memo(CountdownListItem)

const styles = StyleSheet.create({
    fullContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.lightGrey,
        padding: 10,
        marginTop: 15
    },
    timerContainer: {
        flex: 1
    },
    formattedTimeContainer: {
        flex: 2,
        marginLeft: 10
    },
    buttonContainer: {
        flex: 1,
        marginLeft: 10
    },
    buttonStyles: {
        padding: 5,
        borderRadius: 12
    }
})