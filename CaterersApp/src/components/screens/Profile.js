import {StyleSheet, Text, View, Keyboard} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../reusableComponents/Header';
import {Avatar} from 'react-native-elements';
import {TextInput} from 'react-native';
import {Colors} from '../../constants';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header navigation={navigation} />
      <View style={{marginHorizontal: 15}}>
        <Text style={{color: '#040C22', fontSize: 32, fontWeight: '500'}}>
          My Profile
        </Text>
        <Text style={{color: '#363D4E', fontSize: 12, fontWeight: '400'}}>
          Text Here
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <Avatar
            size={'large'}
            rounded
            containerStyle={{backgroundColor: Colors.grayWarm}}
          />
          <Text style={{color: '#D91F26', fontSize: 20, fontWeight: '500'}}>
            Chefs & Caterers
          </Text>
          <Text style={{color: '#040C22', fontSize: 12, fontWeight: '500'}}>
            Chefs & Caterers@gmail.com
          </Text>

          <Text style={{color: '#363D4E', fontSize: 12, fontWeight: '400'}}>
            Mobile No. : 994455777
          </Text>
        </View>
        <View style={{backgroundColor: '#eee', borderRadius: 10, marginTop: 9}}>
          <TextInput
            placeholder="Rahul"
            style={{width: '90%', paddingLeft: 15}}
          />
        </View>

        <View style={{backgroundColor: '#eee', borderRadius: 10, marginTop: 9}}>
          <TextInput
            placeholder="Sharma"
            style={{width: '90%', paddingLeft: 15}}
          />
        </View>

        <TouchableOpacity
          style={{
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: '#D91F26',
            width: '30%',
            alignSelf: 'center',
            paddingVertical: 5,
            borderRadius: 20,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text
              style={{
                paddingVertical: 7,
                color: '#fff',
                fontSize: 15,
                fontWeight: '600',
              }}>
              Save
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
