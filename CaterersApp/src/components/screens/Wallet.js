import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import React from 'react';
import {Colors, fontScale} from '../../constants';
import {Avatar} from 'react-native-elements';

const Wallet = () => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/patt.png')}>
      <View style={{marginTop: 10, marginHorizontal: 12,flex:1}}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            marginVertical: 12,
            fontWeight: '600',
          }}>
          Total Earning
        </Text>
        <View
          style={{
            backgroundColor: Colors.redText,
            borderRadius: 30,
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
          <Image
            source={require('../../assets/images/logoss.png')}
            style={{width: '100%', height: 50, alignSelf: 'center'}}
          />
          <Text style={{color: Colors.white}}>Your Balance</Text>
          <Text style={{color: Colors.white, fontSize: 22, fontWeight: '600'}}>
            12,000
          </Text>
        </View>

        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            marginVertical: 12,
            fontWeight: '600',
          }}>
          Transaction History
        </Text>
        <FlatList
        showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8,9,10]}
          renderItem={({item}) => (
            <View
              style={{
                marginVertical: 5,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor:Colors.white,
                paddingHorizontal:6,
                paddingVertical:12,
                borderRadius:12,
                flex:1,
                elevation:4
              }}>
              <Avatar
                size={50}
                rounded
                source={require('../../assets/images/logos.png')}
                // containerStyle={{backgroundColor:'green'}}
              />
              <View style={{flex:1,paddingHorizontal:6}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 6,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Receaved Payment
                  </Text>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontWeight: '600',
                    }}>
                    30000
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginLeft: 6,
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    Order No.001
                  </Text>
                  <Text
                    style={{
                      color: Colors.greenText,
                      fontSize: 12,
                      fontWeight: '600',
                    }}>
                    Recived
                  </Text>
                </View>
              </View>
            </View>
          )}
        />

      </View>
    </ImageBackground>
  );
};

export default Wallet;

const styles = StyleSheet.create({});
