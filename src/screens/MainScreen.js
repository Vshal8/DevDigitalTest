import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommonButton from "../components/CommonButton";
import { commonStyles } from "../utils/theme";



function MainScreen() {

    const [countdownTimerList, setCountdownTimerList] = useState([])


    function SingleListItem({ item, index }) {
        return (
            <View />
        )
    }

    function onAddButtonPress() {
        let arrCountdownTimerList = [...countdownTimerList]
        let objNewTimer = {
            id: arrCountdownTimerList.length
        }
        arrCountdownTimerList.push(objNewTimer)
    }

    return (
        <View style={commonStyles.screenContainer}>
            <CommonButton buttonTitle={'Add Timer'} onButtonPress={onAddButtonPress} />
            <View style={styles.screenInnerContainer}>
                <FlatList
                    data={countdownTimerList}
                    renderItem={SingleListItem}
                />
            </View>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    screenInnerContainer: {
        flex: 1,
        marginTop: 15
    }
})