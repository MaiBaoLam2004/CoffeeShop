import {Image, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {useNavigation} from '@react-navigation/native';

const Setting = () => {
  const navigation = useNavigation(); // Sử dụng hook useNavigation để có được đối tượng navigation

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleLogoutConfirm = () => {
    navigation.navigate('Login');
  };

  const handleLogoutCancel = () => {
    setShowModal(false); // Ẩn modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.backGroup}>
          <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
            <View style={styles.iconbacktim}>
              <Image
                style={styles.icon_back}
                resizeMode="contain"
                source={require('../images/icon_back.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 26}}>
            Setting
          </Text>
        </View>
        <View style={{width: 40, height: 40}}></View>
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.itemBorder}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={styles.itemImg}
                source={{
                  uri: 'https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png',
                }}
              />
              <Text
                style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center', color:'white', marginLeft: 20}}>
                Log out
              </Text>
            </View>
            <Image
              style={styles.itemImg}
              source={{
                uri: 'https://i.pinimg.com/564x/06/24/44/0624448f94b585d5f3543c3a51458420.jpg',
              }}
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <View style={{ backgroundColor: '#0C0F14', padding: 20, borderRadius: 10 , height:'20%', borderColor:'white', borderWidth:1}}>
            <Text style={{fontSize: 25, fontWeight:'bold', marginTop: 10, color:'white'}}>Bạn có muốn đăng xuất không?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '15%'}}>
              <TouchableOpacity onPress={handleLogoutCancel} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold' }}>Không</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogoutConfirm} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white', fontSize: 20, fontWeight:'bold', width: 50,textAlign:'center'}}>Có</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Setting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    flexDirection: 'column',
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
  imgAvt: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: '10%',
    marginTop: '10%',
  },
  textInput: {
    margin: 20,
    fontSize: 20,
  },
  input: {
    width: '90%',
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: 'white',
    backgroundColor: '#0C0F14',
    fontSize: 18,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#D17842', // Màu nền của nút
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 30,
  },
  loginButtonText: {
    color: '#fff', // Màu chữ của nút
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordToggle: {
    position: 'absolute',
    right: 0,
  },
  itemBorder: {
    flexDirection: 'row',
    margin: 20,
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  itemImg: {
    width: 40,
    height: 40,
    margin: 10,
  },
});
