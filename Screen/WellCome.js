import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const WellCome = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        resizeMode='center'
        style={styles.logoapp}
        source={require('../images/logocro101.png')}
      />
    </View>
  );
};

export default WellCome;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#0C0F14',
    justifyContent:'center'
  },
  logoapp: {
    width: 200,
    height: 200
  },
});
