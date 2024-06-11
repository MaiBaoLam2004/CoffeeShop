import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const DataFavorites = [
  {
    id: 1,
    name: 'Cappuccino',
    note: 'Cappuccino is a latte made with more foam than steamed milk,often with a sprinkle of cocoa powder or cinnamon on top.',
    photo:
      'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/nguon-goc-ra-doi-cua-cafe-capuchino-la-gi-20230320105422-e.jpg',
  },
  {
    id: 2,
    name: 'Cà phê Arabica',
    note: 'Cappuccino 2 is a latte made with more foam than steamed milk,often with a sprinkle of cocoa powder or cinnamon on top.',
    photo:
      'https://www.brevillevietnam.com/wp-content/uploads/2024/02/hat-ca-phe-arabica.jpg',
  },
  {
    id: 3,
    name: 'Cà phê Robusta',
    note: 'Cappuccino 3 is a latte made with more foam than steamed milk,often with a sprinkle of cocoa powder or cinnamon on top.',
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
  },
];

const Favorites = () => {
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
          data={DataFavorites}
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
                    Description
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
                    {item.note}
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
