import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerDashBoardParams} from '../../../navigations/DrawerDashBoard';
import Butukon from '../../../components/Butukon';

interface Props extends DrawerScreenProps<DrawerDashBoardParams, 'Home'> {}
const DrawerHome = ({navigation}: Props) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#fff"
        barStyle="dark-content"
      />
      <Image
        source={require('../../../assets/img/pie.png')}
        style={{
          position: 'absolute',
          top: -110,
          opacity: 0.3,
        }}
      />
      <View style={{
        gap: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}>
        <Butukon
          title="Tutorial"
          height={100}
          border={20}
          onclick={() => navigation.navigate('Tutorial')}
          icon='information-circle-outline'
        />
        <Butukon
          title="Escanear"
          height={100}
          border={20}
          onclick={() => navigation.navigate('Escaner')}
          colorFondo='#009DA6'
          icon='qr-code-outline'
        />
        <Butukon
          title="Historial de pacientes"
          height={100}
          border={20}
          onclick={() => navigation.navigate('Historial')}
          icon='newspaper-outline'
        />
      </View>
    </>
  );
};

export default DrawerHome;
