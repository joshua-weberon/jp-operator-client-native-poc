import React, { useLayoutEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from "react-native";

const Information = ({information}) => {
    return (
        <View>
            <Text testID="information-text">{information}</Text>
        </View>
    )
}

export default Information;