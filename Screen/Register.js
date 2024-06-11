import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Image} from 'react-native-elements';

function Register({navigation}){
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
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
        onChangeText={setUsername}
        placeholder="Name"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        value={email}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          secureTextEntry={!passwordVisible1} // Ẩn hoặc hiển thị mật khẩu
        />
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setPasswordVisible1(!passwordVisible1)} // Đổi trạng thái hiển thị mật khẩu
        >
          <Image
            source={
              passwordVisible1
                ? require('../images/icon_open.png') // Đường dẫn đến biểu tượng mắt mở
                : require('../images/icon_hide.png') // Đường dẫn đến biểu tượng mắt đóng
            }
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.viewregister}>
        <Text style={styles.registertk}>You have an account? Click</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.textregister}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;

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
    position: 'relative', // Đặt `position: relative` để chứa các phần tử bên trong có `absolute positioning`
    alignItems: 'center',
  },
});
