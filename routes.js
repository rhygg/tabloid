import React from 'react';
import {Platform, StyleSheet} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Icon} from 'react-native-elements';
import {BorderlessButton} from 'react-native-gesture-handler';
import HomeScreen from "./scenes/home_screen";
import ArticlesScreen from "./screens/articles_screen";
import ArticleScreen from "./screens/article_screen";
import SearchScreen from "./screens/search_screen";

let font = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto';
let size = Platform.OS === 'ios' ? 24 : 25;
let titleColor = '#363434';
let iconColor = '#808689';
let headerStyle = {backgroundColor: '#fff'};
let headerTitleStyle = {fontWeight: 'bold', fontSize: 17, fontFamily: font, color: titleColor};
let SearchBtn = (props) => (
    <BorderlessButton {...props} style={styles.wrapper}>
        <Icon type={`ionicon`} name={"md-search"} size={size} color={iconColor}/>
    </BorderlessButton>
);

const AppStack = createStackNavigator(
    {
        Home: HomeScreen,
        Articles: ArticlesScreen,
        Article: ArticleScreen,
        Search: SearchScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle, headerTitleStyle,
            headerRight: (<SearchBtn onPress={() => navigation.navigate('Search')}/>)
        })
    }
);

//ROUTER ====================================================
const Router = createAppContainer(AppStack);
export default Router;

const styles = StyleSheet.create({
    wrapper: {
        height: 44,
        width: 44 + 6,
        justifyContent: "center",
        alignItems: "center"
    }
});
