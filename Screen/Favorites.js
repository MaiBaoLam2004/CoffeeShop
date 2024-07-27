import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

function Favorites(){
  const [reloading, setReloading] = useState(false);
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.106:3000/favorite') // Đảm bảo thay thế bằng địa chỉ IP của bạn
      .then(response => response.json())
      .then(data => {
        setFavorites(data);
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
    <SafeAreaView style={st.container}>
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
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
          Favorites
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
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          refreshControl={
            //  tải lại dữ liệu mới
            <RefreshControl
              refreshing={reloading} // trạng thái đánh dấu đang được làm mới
              onRefresh={startReload} // sử lý sự kiện callback
            />
          }
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={st.viewitem}>
              <Image style={st.img} source={{uri: item.photo}} />
              <View style={st.bgtim}>
                <TouchableOpacity>
                  <View style={st.iconbacktim}>
                    <Image
                      style={st.icon_tims}
                      resizeMode="contain"
                      source={require('../images/icon_tim_red.png')}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <View>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 30,
                      marginLeft: 20,
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: 20,
                      marginLeft: 22,
                      marginTop: 10,
                    }}>
                    Mô tả
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'medium',
                      fontSize: 20,
                      marginLeft: 20,
                      marginTop: 10,
                      marginBottom: 20,
                      marginRight: 20,
                    }}>
                    {item.mota}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};

export default Favorites;

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
  imgicon: {
    backgroundColor: 'black',
  },
  viewitem: {
    borderRadius: 20,
    alignSelf: 'center',
    flex: 1,
    backgroundColor: '#262B33',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 20,
    marginLeft: 20,
  },
  img: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  imgbg: {
    alignItems: 'center',
  },
  iconbacktim: {
    width: 45,
    height: 45,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  icon_tims: {
    width: 30,
    height: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    margin: 5,
  },
  bgtim: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    padding: 15,
  },
});
