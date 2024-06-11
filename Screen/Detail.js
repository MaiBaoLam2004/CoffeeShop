import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

function Detail({route}) {
  const [reloading, setReloading] = useState(false);
  const {product} = route.params;
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
      <ScrollView>
        <View>
          <View style={st.imagecontainer}>
            <Image
              style={st.imagecoffee}
              source={{uri: product.photo}}
              resizeMode=""
            />
            <View style={st.back_gr}>
              <TouchableOpacity
                onPress={() => navigation.navigate('MainScreen')}>
                <View style={st.iconbacktim}>
                  <Image
                    style={st.icon_back}
                    resizeMode="contain"
                    source={require('../images/icon_back.png')}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={st.iconbacktim}>
                  <Image
                    style={st.icon_tim}
                    resizeMode="contain"
                    source={require('../images/icon_tim.png')}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={st.chitiet}>
            <View>
              <View style={st.viewtext}>
                <Text style={[st.text1, {marginBottom: 10}]}>
                  {product.name}
                </Text>
                <Text
                  style={{fontSize: 30, fontWeight: 'bold', color: 'white', marginTop: 10}}>
                  Mô tả
                </Text>
                <Text style={st.text2}>{product.mota}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

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
              <Text style={st.gia}>{product.price}</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View>
              <View style={st.boxThem}>
                <Text style={st.textaddcart}>Add to Cart</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Detail;

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  imagecoffee: {
    width: '100%',
    height: 590,
    justifyContent: 'flex-start',
  },
  imagecontainer: {
    flex: 1,
  },
  chitiet: {
    backgroundColor: '#0C0F14',
  },
  back_gr: {
    width: '100%',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
  },
  icon_back: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    margin: 5,
  },
  icon_tim: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    margin: 5,
  },
  iconbacktim: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  money: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    alignItems: 'center',
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
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  text2: {
    fontSize: 18,
    marginTop: 10,
    color: 'white',
    marginLeft: 10,
  },
  viewtext: {
    margin: 20,
    maxHeight: '100%',
  },
  viewbottom: {
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  groupprice: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});
