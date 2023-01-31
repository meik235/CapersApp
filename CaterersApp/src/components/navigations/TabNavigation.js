import * as React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Icon} from 'react-native-elements';
import Profile from '../screens/Profile';
import {Colors, Fonts, fontScale} from '../../constants';
import Wallet from '../screens/Wallet';
import Orders from '../screens/Orders';
const HomeStack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="wallet" component={Wallet} />
      <HomeStack.Screen name="profile" component={Profile} />
      <HomeStack.Screen name="orders" component={Orders} />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarLabelStyle: {
          fontSize: fontScale.text,
          fontFamily: Fonts.mediumBold,
        },
        tabBarStyle: {
          backgroundColor: Colors.redText,
          // borderTopLeftRadius: 15,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
          // borderTopRightRadius: 15
        },
      }}>
      <Tab.Screen
        name="Wallet"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{flex: 1}}>
                {focused ? (
                  <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      bottom: 0,
                      backgroundColor: '#fff',
                      padding: 10,
                      borderWidth: 2,
                      borderColor: Colors.redText,
                      borderRadius: 12,
                    }}>
                    <Icon
                      name="home"
                      type="simple-line-icon"
                      color={Colors.redText}
                      size={28}
                    />
                  </View>
                ) : (
                  <Icon
                    name="home"
                    type="simple-line-icon"
                    color={'#fff'}
                    size={18}
                  />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{flex: 1}}>
                {focused ? (
                  <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      bottom: 0,
                      backgroundColor: '#fff',
                      padding: 10,
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: Colors.redText,
                    }}>
                    <Icon
                      name="settings"
                      type="feather"
                      color={Colors.redText}
                      size={30}
                    />
                  </View>
                ) : (
                  <Icon
                    name="settings"
                    type="feather"
                    color={'#fff'}
                    size={18}
                  />
                )}
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{flex: 1}}>
                {focused ? (
                  <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'center',
                      padding: 10,
                      bottom: 0,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                      borderWidth: 2,
                      borderColor: Colors.redText,
                    }}>
                    <Icon
                      name="user"
                      type="feather"
                      color={Colors.redText}
                      size={30}
                    />
                  </View>
                ) : (
                  <Icon name="user" type="evilicon" color={'#fff'} size={26} />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigation;
