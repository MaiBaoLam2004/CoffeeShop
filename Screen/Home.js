import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Image} from 'react-native-elements';

function Home() {
  const [reloading, setReloading] = useState(false);
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://10.24.54.72:3000/products') // Đảm bảo thay thế bằng địa chỉ IP của bạn
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

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
    <View style={st.container}>
      <View style={st.back_gr}>
        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={st.imgicon}>
            <Image
              style={st.icon_back}
              resizeMode="contain"
              source={require('../images/icon_menu.png')}
            />
          </View>
        </TouchableOpacity>
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
      <ScrollView
        style={{marginLeft: 10}}
        refreshControl={
          //  tải lại dữ liệu mới
          <RefreshControl
            refreshing={reloading} // trạng thái đánh dấu đang được làm mới
            onRefresh={startReload} // sử lý sự kiện callback
          />
        }>
        <View>
          <Text style={st.textBanner}>Find the best coffee for you</Text>
        </View>
        <View style={st.bgtitle}>
          <View style={st.loai}>
            <ScrollView horizontal={true}>
              <TouchableOpacity style={st.toupaborder}>
                <Text style={st.textall}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity style={st.toupaborder}>
                <Text style={st.textcoffee}>Coffee</Text>
              </TouchableOpacity>
              <TouchableOpacity style={st.toupaborder}>
                <Text style={st.textcapu}>Cappuccino</Text>
              </TouchableOpacity>
              <TouchableOpacity style={st.toupaborder}>
                <Text style={st.textchon}>Coffee Cherry</Text>
              </TouchableOpacity>
              <TouchableOpacity style={st.toupaborder}>
                <Text style={st.textmilk}>Coffee Milk</Text>
              </TouchableOpacity>
              <View style={{marginRight: 10}}></View>
            </ScrollView>
          </View>
        </View>
        <SafeAreaView>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {product: item})}
              >
                <View style={st.viewImg}>
                  <View>
                    <Image source={{uri: item.photo}} style={st.imgview} />
                  </View>
                  <View style={{margin: 10}}>
                    <View>
                      <Text style={st.nameimg}>{item.name}</Text>
                    </View>
                    <View style={st.money}>
                      <View style={st.imgPrice}>
                        <Image
                          style={st.iconMoney}
                          source={require('../images/icon_money.png')}
                        />
                        <Text style={st.gia}>{item.price}</Text>
                      </View>
                      <TouchableOpacity>
                        <View>
                          <View style={st.boxThem}>
                            <Image
                              style={st.imgThem}
                              source={require('../images/icon_add.png')}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: '3%',
            marginTop: '10%',
            marginBottom: '4%',
          }}>
          Top Coffee
        </Text>
        <SafeAreaView>
          <FlatList
            horizontal
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
              onPress={() => navigation.navigate('Detail', {product: item})}
              >
                <View style={st.viewImg}>
                  <View>
                    <Image source={{uri: item.photo}} style={st.imgview} />
                  </View>
                  <View style={{margin: 10}}>
                    <View>
                      <Text style={st.nameimg}>{item.name}</Text>
                    </View>
                    <View style={st.money}>
                      <View style={st.imgPrice}>
                        <Image
                          style={st.iconMoney}
                          source={require('../images/icon_money.png')}
                        />
                        <Text style={st.gia}>{item.price}</Text>
                      </View>
                      <TouchableOpacity>
                        <View>
                          <View style={st.boxThem}>
                            <Image
                              style={st.imgThem}
                              source={require('../images/icon_add.png')}
                            />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

export default Home;

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
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
  textBanner: {
    width: 250,
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginLeft: '2%',
  },
  textall: {
    color: 'white',
    fontSize: 20,
    width: 40,
    textAlign: 'center',
  },
  textcoffee: {
    color: 'white',
    fontSize: 20,
    width: 70,
    textAlign: 'center',
  },
  textcapu: {
    color: 'white',
    fontSize: 20,
    width: 120,
    textAlign: 'center',
  },
  textchon: {
    color: 'white',
    fontSize: 20,
    width: 130,
    textAlign: 'center',
  },
  textmilk: {
    color: 'white',
    fontSize: 20,
    width: 120,
    textAlign: 'center',
  },
  toupaborder: {
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    margin: 8,
  },
  loai: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  imgicon: {
    backgroundColor: 'black',
  },
  viewImg: {
    backgroundColor: '#252A32',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  imgview: {
    width: 140,
    height: 140,
    borderRadius: 20,
    margin: 5,
  },
  nameimg: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 18,
    color: 'white',
  },
  imgThem: {
    width: 20,
    height: 20,
  },
  boxThem: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#D17842',
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
    alignItems: 'center',
  },
  iconMoney: {
    width: 30,
    height: 30,
  },
  price: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  gia: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  imgPrice: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bgtitle: {
    width: '100%',
  },
});
