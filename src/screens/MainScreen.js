import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CommonButton from "../components/CommonButton";
import { commonStyles } from "../utils/theme";
import CountdownListItem from "../components/CountdownListItem";



function MainScreen() {

    const [countdownTimerList, setCountdownTimerList] = useState([])


    function SingleListItem({ item, index }) {
        return (
            <CountdownListItem item={item} index={index}/>
        )
    }

    function onAddButtonPress() {
        let arrCountdownTimerList = [...countdownTimerList]
        let objNewTimer = {
            id: arrCountdownTimerList.length,
            time: 60
        }
        arrCountdownTimerList.push(objNewTimer)
        setCountdownTimerList(arrCountdownTimerList)
    }

    const listKeyExtractor = useCallback((item, index) => { return item.id.toString() }, [])

    return (
        <View style={commonStyles.screenContainer}>
            <CommonButton buttonTitle={'Add Timer'} onButtonPress={onAddButtonPress} customButtonStyles={styles.addButttonContainer} />
            <View style={commonStyles.flexFull}>
                <FlatList
                    data={countdownTimerList}
                    renderItem={SingleListItem}
                    keyExtractor={listKeyExtractor}
                />
            </View>
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    addButttonContainer: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 12,
        alignSelf: 'center'
    }
})