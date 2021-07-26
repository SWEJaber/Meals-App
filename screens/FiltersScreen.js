import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const FiltersScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen!</Text>
        </View>
    )
}


FiltersScreen.navigationOptions = navigationData => {

    return {
        headerTitle: 'Filters Meal',
        headerLeft:
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName='ios-menu'
                    onPress={() => { 
                        navigationData.navigation.toggleDrawer()
                    }}
                />

            </HeaderButtons>
    }

}
export default FiltersScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
