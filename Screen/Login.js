import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (usernameOrEmail.trim() === '' || password.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập tên đăng nhập/email và mật khẩu.');
      return;
    }
    
    // Kiểm tra mật khẩu có ít nhất 8 ký tự
    if (password.trim().length < 8) {
      Alert.alert('Thông báo', 'Mật khẩu cần ít nhất 8 ký tự.');
      return;
    }
    
    try {
      const response = await fetch('http://10.24.54.72:3000/users');
      const users = await response.json();
  
      // Tìm kiếm người dùng trong danh sách users với tên đăng nhập hoặc email
      const user = users.find(user => user.username === usernameOrEmail || user.email === usernameOrEmail);
  
      if (!user) {
        Alert.alert('Login Failed', 'Tên đăng nhập hoặc email không tồn tại.');
        return;
      }
  
      // So sánh mật khẩu
      if (user.password !== password) {
        Alert.alert('Login Failed', 'Mật khẩu không chính xác.');
        return;
      }
  
      // Đăng nhập thành công
      console.log('Login successful:', user);
  
      // Hiển thị thông báo sau 1 giây
      setTimeout(() => {
        Alert.alert('Thông báo', 'Bạn đã đăng nhập thành công.')
        navigation.navigate('MyDrawer');
      }, 1000);
    } catch (error) {
      console.error('Error logging in:', error.message);
      Alert.alert('Thông báo', 'Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại sau.');
    }
  };
  


  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logoapp}
        source={require('../images/logocro101.png')}
      />
      <View>
        <Text style={styles.wellcome}>Welcome to Lungo !!</Text>
        <Text style={styles.logintext}>Login to Continue</Text>
      </View>
      <View style={{padding: 20}}></View>
      <TextInput
        style={styles.input}
        onChangeText={text => setUsernameOrEmail(text)}
        placeholder="Tài khoản hoặc Email"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={usernameOrEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Mật khẩu"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry={!passwordVisible} // Ẩn hoặc hiển thị mật khẩu
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible(!passwordVisible)} // Đổi trạng thái hiển thị mật khẩu
        >
          <Image
            source={
              passwordVisible
                ? require('../images/icon_open.png') // Đường dẫn đến biểu tượng mắt mở
                : require('../images/icon_hide.png') // Đường dẫn đến biểu tượng mắt đóng
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={rememberMe}
          onValueChange={setRememberMe}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Remember me</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButtonGG}>
        <Image
          style={styles.iconGG}
          source={require('../images/icon_google.png')}></Image>
        <Text style={styles.loginButtonTextGG}>Sign in with Google</Text>
      </TouchableOpacity>
      <View style={styles.viewregister}>
        <Text style={styles.registertk}>Don’t have account? Click</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.textregister}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewregister}>
        <Text style={styles.registertk}>Forget Password? Click</Text>
        <Text style={styles.textregister}>Reset</Text>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C0F14',
  },
  logoapp: {
    width: 150,
    height: 150,
    alignItems: 'center',
  },
  wellcome: {
    color: 'white',
    fontSize: 25,
    fontFamily: '',
    fontWeight: 'bold',
    alignItems: 'center',
    marginTop: 30,
  },
  logintext: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 20,
    fontFamily: '',
    fontWeight: 'light',
    textAlign: 'center',
    marginTop: 20,
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
  signin: {
    width: 400,
    height: 60,
    backgroundColor: '#D17842',
    borderRadius: 20,
    alignItems: 'center',
  },
  textsign: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlignVertical: 'center',
  },
  loginButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#D17842', // Màu nền của nút
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff', // Màu chữ của nút
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButtonGG: {
    flexDirection: 'row', // Sắp xếp con theo hàng ngang
    alignItems: 'center', // Căn giữa theo trục ngang
    justifyContent: 'center', // Căn giữa nội dung
    width: '90%',
    height: 60,
    backgroundColor: 'white', // Màu nền của nút Google
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 20, // Khoảng cách giữa nội dung và viền nút
  },
  iconGG: {
    width: 20,
    height: 20,
    marginLeft: 5, // Khoảng cách giữa logo và chữ
  },
  loginButtonTextGG: {
    color: 'black', // Màu chữ của nút
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 20,
    flex: 1, // Đảm bảo chữ chiếm toàn bộ không gian còn lại
  },
  viewregister: {
    flexDirection: 'row',
    marginTop: 20,
  },
  registertk: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 16,
  },
  textregister: {
    color: '#D17842',
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputPassword: {
    width: '100%',
    height: 50,
    paddingHorizontal: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: '#fff',
    paddingRight: 40, // Đặt padding phải để tránh chồng lên biểu tượng mắt
  },
  eyeIcon: {
    position: 'absolute', // Đặt biểu tượng mắt bên phải của `TextInput`
    justifyContent: 'flex-end',
    alignItems: 'center',
    textAlign: 'right',
    top: 20,
    right: 30,
    height: 35,
    width: 35,
  },
  icon: {
    width: 30,
    height: 30,
  },
  passwordContainer: {
    width: '100%',
    marginBottom: 15,
    position: 'relative', // Đặt `position: relative` để chứa các phần tử bên trong có `absolute positioning`
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 30,
    alignSelf: 'flex-start',
    color: 'white',
  },
  checkbox: {
    marginRight: 8,
    color: 'white',
    backgroundColor: 'white',
  },
  label: {
    color: 'white',
  },
});
