import {View,TextInput,Text,StyleSheet} from "react-native";
import React from "react";


const SearchBar = (props)=>{
    return(
        <View>
            <TextInput
                placeholder="Search"
                style = {styles.input}
                value = {props.searchText}
                onChangeText = {(text) => props.setSearchText(text)}
                onSubmitEditing = {props.onSubmit}
            />
        </View>
    )
}


export default SearchBar;

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    input:{
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 20,
        color: "#000",
        borderWidth: 2
    }
})