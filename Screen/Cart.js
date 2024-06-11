import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const dataCart = [
  {
    id: 1,
    name: 'capu',
    price: 4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
    quantity: 2,
  },
  {
    id: 2,
    name: 'capu',
    price: 4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
    quantity: 2,
  },
  {
    id: 3,
    name: 'capu',
    price: 4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
    quantity: 2,
  },
  {
    id: 4,
    name: 'capu',
    price: 4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
    quantity: 2,
  },
  {
    id: 5,
    name: 'capu',
    price: 4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
    quantity: 2,
  },
];
function Cart() {
  const [reloading, setReloading] = useState(false);
  const navigation = useNavigation();

  const startReload = useCallback(() => {
    // khi bắt đầu reload
    console.log('Bắt đầu Reloading');
    setReloading(true);
    setTimeout(() => {
      // hết thời gian 5s
      setReloading(false); // ẩn vòng quay
      console.log('Đã Reload xong');
    }, 1000);
  }, []);
  return (
    <SafeAreaView style={st.container}>
      <View style={st.back_gr}>
        <TouchableOpacity>
          <View style={st.imgicon}>
            <Image
              style={st.icon_back}
              resizeMode="contain"
              source={require('../images/icon_menu.png')}
            />
          </View>
        </TouchableOpacity>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
          Cart
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('User')}>
          <View>
            <Image
              style={st.icon_tim}
              resizeMode="contain"
              source={require('../images/icon_avatar.png')}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <SafeAreaView>
          <FlatList
            refreshControl={
              //  tải lại dữ liệu mới
              <RefreshControl
                refreshing={reloading} // trạng thái đánh dấu đang được làm mới
                onRefresh={startReload} // sử lý sự kiện callback
              />
            }
            data={dataCart}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={st.viewitem}>
                <View style={st.imgbo}>
                  <Image style={st.img} source={{uri: item.photo}} />
                  <View style={st.bgtext}>
                    <View>
                      <Text
                        style={{
                          fontSize: 28,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 30,
                        alignItems: 'center',
                      }}>
                      <Image
                        style={st.imgmoney}
                        source={require('../images/icon_money.png')}
                      />
                      <Text
                        style={{
                          fontSize: 30,
                          color: 'white',
                          fontWeight: 'bold',
                        }}>
                        {item.price}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity>
                        <View style={st.bgdel}>
                          <Image
                            style={st.imgdel}
                            source={require('../images/icon_del.png')}
                          />
                        </View>
                      </TouchableOpacity>

                      <View style={st.bgprice}>
                        <Text
                          style={{
                            fontSize: 26,
                            color: 'white',
                            fontWeight: 'bold',
                          }}>
                          {item.quantity}
                        </Text>
                      </View>
                      <TouchableOpacity>
                        <View style={st.bgdel}>
                          <Image
                            style={st.imgadd}
                            source={require('../images/icon_add.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </SafeAreaView>
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
                Total Price
              </Text>
              <View style={st.imgPrice}>
                <Image
                  style={st.iconMoney}
                  source={require('../images/icon_money.png')}
                />
                <Text style={st.gia}>4</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View>
                <View style={st.boxThem}>
                  <Text style={st.textaddcart}>Pay</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Cart;

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  back_gr: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_back: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    margin: 5,
  },
  icon_tim: {
    width: 35,
    height: 35,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    margin: 5,
  },
  bg: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
  },
  viewitem: {
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#262B33',
    margin: 10,
  },
  img: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },
  imgbo: {
    margin: 10,
    flexDirection: 'row',
  },
  bgtext: {
    marginLeft: 20,
    width: '50%',
  },
  imgmoney: {
    width: 35,
    height: 35,
  },
  imgdel: {
    width: 20,
    height: 5,
  },
  bgdel: {
    width: 40,
    height: 40,
    backgroundColor: '#D17842',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  imgadd: {
    width: 20,
    height: 20,
  },
  bgprice: {
    width: 60,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: '#D17842',
    borderWidth: 2,
  },
  // viewbottom: {
  //   top: 50,
  //   bottom: 0,
  // },
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
});
