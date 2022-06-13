/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Entypo, AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import MarketScreen from '../screens/MarketScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RankingScreen from '../screens/RankingScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const iconSize = 20;

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>      
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={iconSize} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          title: 'Portfolio',
          tabBarIcon: ({ color }) => <AntDesign name="piechart" size={iconSize-2} color={color} />,
        }}
      />
       <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: 'Market',
          tabBarIcon: ({ color }) => <FontAwesome5 name="chart-line" size={iconSize} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Rankings"
        component={RankingScreen}
        options={{
          title: 'Rankings',
          tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={iconSize} color={color} />,
        }}
      />
    <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome name="user" size={iconSize} color={color} />,
        }}
      />



    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={iconSize} style={{ marginBottom: -3 }} {...props} />;
}
