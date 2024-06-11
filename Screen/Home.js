import { useNavigation } from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
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

const dsdata = [
  {
    id: 1,
    name: 'Cappuccino',
    price: 2,
    mota:'Capuchino là thức uống hòa quyện giữa hương thơm của sữa, vị béo của bọt kem cùng vị đậm đà từ cà phê Espresso. Tất cả tạo nên một hương vị đặc biệt, một chút nhẹ nhàng, trầm lắng và tinh tế',
    photo:
      'https://media.saigontourist.edu.vn/Media/1_STHCHOME/FolderFunc/202303/Images/nguon-goc-ra-doi-cua-cafe-capuchino-la-gi-20230320105422-e.jpg',
  },
  {
    id: 2,
    name: 'Cà phê Arabica',
    price: 1.5,
    mota:'Cà Phê Arabica có tên khoa học là Coffea Arabica, tên theo tiếng Việt là Cà phê Chè do loại cà phê này có lá nhỏ, cây thường để thấp giống cây chè là một loại cây công nghiệp phổ biến ở Việt Nam. Arabica có hàm lượng cafeine từ 1 - 2 % thấp hơn phân nữa hàm lượng cafeine của Robusta',
    photo:
      'https://www.brevillevietnam.com/wp-content/uploads/2024/02/hat-ca-phe-arabica.jpg',
  },
  {
    id: 3,
    name: 'Cà phê Robusta',
    mota:'Robusta có gốc từ robust – có ý nghĩa là mạnh. Như vậy, Robusta có nghĩa là một loại cà phê có vị mạnh, giàu caffeine. Cà Phê Robusta có tên khoa học là Coffea robusta hay còn gọi là cà phê Vối, có hàm lượng caffeine từ 2 - 4 %, có vị gắt hơn, hạt tròn hơn và nhỏ hơn hạt cà phê Arabica.',
    price: 2.4,
    photo:
      'https://cdn.tgdd.vn/2023/10/CookRecipe/CookTipsNote/ca-phe-arabica-la-gi-ca-phe-robusta-la-gi-phan-biet-arabica-tipsnote-800x550-6.jpg',
  },
  {
    id: 4,
    name: 'Cà phê Cherry',
    mota:'Cà phê Cherry là loại cà phê thích hợp với rất nhiều loại khí hậu, có khả năng chống lại sâu bệnh rất tốt. Tuy nhiên chúng có độ chua cao nên thường rất hiếm trồng và chiếm khoảng 1% lượng cà phê tiêu thụ trên thế giới. Về hình dáng, thân cây Café Cherry khá cao, lá có màu xanh bóng dài to',
    price: 2.3,
    photo:
      'https://artcoffee.vn/wp-content/uploads/huong-vi-cua-ca-phe-cherry-khong-dang-gat-nen-rat-duoc-phai-nu-yeu-thich.jpg',
  },
  {
    id: 5,
    name: 'Cà phê Moka',
    mota:'Cà phê Moka thuộc dòng sản phẩm của Arabica, hạt có hình dáng thon dài và đường rãnh lượn sóng ở giữa hạt. Cà phê Moka có hương thơm nhẹ nhàng quyến rũ rất đặc trưng, vị từ chua chuyển sang hậu đắng rất đặc biệt. Khi pha cà phê có màu nâu nhạt sánh',
    price: 2.1,
    photo:
      'https://dayphache.edu.vn/wp-content/uploads/2016/05/ca-phe-mocha-nong.jpg',
  },
];


const CompItem = ({sp}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Detail', {product: sp})}>
      <View style={st.viewImg}>
        <View>
          <Image source={{uri: sp.photo}} style={st.imgview} />
        </View>
        <View style={{margin: 10}}>
          <View>
            <Text style={st.nameimg}>{sp.name}</Text>
          </View>
          <View style={st.money}>
            <View style={st.imgPrice}>
              <Image
                style={st.iconMoney}
                source={require('../images/icon_money.png')}
              />
              <Text style={st.gia}>{sp.price}</Text>
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
  );
};

function Home() {
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
    <View style={st.container}>
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
        <SafeAreaView style={{}}>
          <FlatList
            horizontal
            data={dsdata}
            renderItem={({item}) => <CompItem sp={item} />}
            keyExtractor={item => item.id}
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
        <SafeAreaView style={{}}>
          <FlatList
            horizontal
            data={dsdata}
            renderItem={({item}) => <CompItem sp={item} />}
            keyExtractor={item => item.id}
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
