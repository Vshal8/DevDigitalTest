import { StyleSheet } from "react-native"

export const colors = {
    white:'#ffffff',
    black:'#000000',
    darkGrey:'#5a5a5a',
    grey:'#a7a7a7',
    lightGrey:'#d9d9d9',
    primaryColor:'#6c0c9c'
}

export const commonStyles= StyleSheet.create({
    flexFull:{
        flex:1
    },
    screenContainer:{
        flex:1,
        padding:15,
        backgroundColor:colors.white
    }
})