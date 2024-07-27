import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const data = {
  photo:
    'https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png?f=webp',
};

function User() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    id: '',
    username: '',
    email: '',
    password: '', // Mật khẩu hiện tại
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API để lấy dữ liệu người dùng
    fetch('http://192.168.1.106:3000/users')
      .then(response => response.json())
      .then(data => {
        const user = data[0]; // Lấy người dùng đầu tiên trong danh sách
        setUserData({
          id: user.id,
          username: user.username,
          email: user.email,
          password: '', // Không hiển thị mật khẩu hiện tại
        });
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu: ', error);
        setLoading(false);
      });      
  }, []);

  const updatePassword = () => {
  // Kiểm tra mật khẩu mới và mật khẩu xác nhận
  if (newPassword && newPassword !== confirmPassword) {
    Alert.alert('Lỗi', 'Mật khẩu không khớp');
    return;
  }

  // Tạo đối tượng updatedUser với thông tin người dùng
  const updatedUser = {
    username: userData.username,
    email: userData.email,
    password: newPassword || userData.password // Chỉ cập nhật mật khẩu mới nếu có, giữ mật khẩu hiện tại nếu không có
  };

  // Gửi yêu cầu PUT để cập nhật thông tin người dùng
  fetch(`http://192.168.1.106:3000/users/${userData.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  })
    .then(response => response.json())
    .then(data => {
      Alert.alert('Thành công', 'Đổi thông tin thành công');
    })
    .catch(error => {
      console.error('Lỗi khi cập nhật thông tin: ', error);
      Alert.alert('Lỗi', 'Cập nhật thông tin thất bại');
    });
};

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.backGroup}>
          <TouchableOpacity
           onPress={() => navigation.navigate('MyDrawer')}
          >
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
            User
          </Text>
        </View>
        <View style={{width: 40, height: 40}}></View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image
          source={{uri: data.photo}}
          style={styles.imgAvt}
          resizeMode="contain"
        />
        <TextInput
          style={styles.input}
          placeholder="Tài khoản"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={userData.username}
          onChangeText={text => setUserData({...userData, username: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          value={userData.email}
          onChangeText={text => setUserData({...userData, email: text})}
        />
        {/* <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry
          value={userData.pass}
          onChangeText={text => setUserData({...userData, pass: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry
          value={userData.pass2}
          onChangeText={text => setUserData({...userData, pass2: text})}
        /> */}
        <TextInput
        style={styles.input}
        placeholder="Mật khẩu mới"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        secureTextEntry
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập lại mật khẩu mới"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        secureTextEntry
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      />
        <TouchableOpacity style={styles.loginButton} onPress={updatePassword}>
          <Text style={styles.loginButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default User;

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
});
