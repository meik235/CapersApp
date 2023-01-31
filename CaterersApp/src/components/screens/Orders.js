import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../reusableComponents/Header';
import {Colors, Fonts} from '../../constants';
import {Avatar, Card} from 'react-native-elements';

const Orders = ({navigation}) => {
  const category = ['All', 'Approved', 'Cancelled'];
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Header navigation={navigation} />
      <View style={{flex: 1, marginHorizontal: 15}}>
        <Text style={{color: '#040C22', fontSize: 32, fontWeight: Fonts.bold}}>
          Orders
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 12,
            justifyContent: 'space-between',
          }}>
          {category.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor:
                    categoryIndex === index ? Colors.redText : Colors.white,
                  paddingHorizontal: 10,
                  paddingVertical: 2,
                  borderRadius: 12,
                }}>
                <Text
                  style={{
                    color:
                      categoryIndex === index ? Colors.white : Colors.black,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Card
                containerStyle={{
                  flex: 1,
                  borderRadius: 12,
                  marginHorizontal: 6,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Avatar
                    rounded
                    size={'medium'}
                    containerStyle={{backgroundColor: Colors.grayWarm}}
                  />
                  <View style={{paddingLeft: 12}}>
                    <Text style={{fontFamily: Fonts.bold}}>Rahul Verma</Text>
                    <Text>04 Nov 2022 09:00 PM</Text>
                    <Text>Date: 21 Oct 2022</Text>
                    <Text style={{color: Colors.greenText}}>Approved</Text>
                  </View>
                </View>
              </Card>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
