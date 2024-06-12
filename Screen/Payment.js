import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { totalPrice } = route.params;
  return (
    <View style={st.container}>
      <View style={st.imageContainer}>
        <View style={st.backGroup}>
          <TouchableOpacity
           onPress={() => navigation.navigate('MainScreen')}
          >
            <View style={st.iconbacktim}>
              <Image
                style={st.icon_back}
                resizeMode="contain"
                source={require('../images/icon_back.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
            Payment
          </Text>
        </View>
        <View style={{width: 40, height: 40}}></View>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity>
          <View style={{margin: 10, borderColor:'#D17842', borderWidth:2, borderRadius: 30}}>
          <Text style={{fontSize: 20, fontWeight:'bold', color:'white', marginLeft: 15, marginTop:10}}>Credit Card</Text>
          <View style={{flexDirection:'column', backgroundColor:'#4a4a4a',borderRadius: 30,  margin: 10}}>
            <View style={{margin: 10}}>
             <View style={{flexDirection:'row', justifyContent:'space-between', margin: 5}}>
              <Image style={{width: 45, height: 30}} resizeMode='center' source={require('../images/icon_sim.png')}/>
              <Image style={{width: 60, height: 30}} resizeMode='center' source={require('../images/icon_visa.png')}/>
            </View>
            <View>
              <Text style={{fontSize: 23, fontWeight:'bold', color:'white', marginLeft: 8,marginTop: 30}}>3 8 9 7   8 9 2 3   6 7 4 5   4 6 3 8</Text>
            </View> 
            <View style={{flexDirection:'row', justifyContent:'space-between', margin: 8, marginTop: 50}}>
              <View>
                <Text style={{fontSize: 15, fontWeight:'300', color:'white',}}>Card Holder Name</Text>
                <Text style={{fontSize: 20, fontWeight:'bold', color:'white',}}>Robert Evans</Text>
              </View>
              <View>
                <Text style={{fontSize: 15, fontWeight:'300', color:'white',}}>Expiry Date</Text>
                <Text style={{fontSize: 20, fontWeight:'bold', color:'white', textAlign:'right'}}>02/30</Text>
              </View>
            </View>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={st.itemBorder}>
            <View
              style={{
                flexDirection: 'row', margin: 5, left:10
              }}>
              <Image
                style={st.itemImg}
                resizeMode='contain'
                source={require('../images/icon_vi.png')}
              />
              <Text
                style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center', color:'white'}}>
                Wallet
              </Text>
            </View>
            <Text style={{color:'white', fontSize: 25, alignSelf:'center', fontWeight:'500', right:20}}>$ 100</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <View style={st.viewbottom}>
          <View style={st.money}>
            <View style={st.groupprice}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  fontWeight: 'bold',
                  bottom: 10,
                }}>
                Price
              </Text>
              <View style={st.imgPrice}>
                <Image
                  style={st.iconMoney}
                  source={require('../images/icon_money.png')}
                />
                <Text style={st.gia}>{totalPrice}</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View>
                <View style={st.boxThem}>
                  <Text style={st.textaddcart}>Pay from Credit Card</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Payment

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  imageContainer: {
    padding: 20,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageCoffee: {
    width: 100, // adjust the size according to your needs
    height: 100, // adjust the size according to your needs
  },
  backGroup: {
    // adjust the spacing as needed
  },
  iconbacktim: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon_back: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    margin: 5,
  },
  iconTim: {
    width: 24, // adjust the size according to your needs
    height: 24, // adjust the size according to your needs
  },
  viewbottom: {
    bottom: 0,
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  imgPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMoney: {
    width: 40,
    height: 40,
  },
  boxThem: {
    width: 250,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#D17842',
  },
  textaddcart: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  gia: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text1: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
  },
  viewtext: {
    margin: 20,
    maxHeight: '100%',
  },
  viewbottom: {
    bottom: 0,
  },
  groupprice: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  itemBorder: {
    flexDirection: 'row',
    margin: 20,
    borderRadius: 30,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  itemImg: {
    width: 30,
    height: 30,
    margin: 10,
  },
})