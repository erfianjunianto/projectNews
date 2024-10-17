import React from 'react';
import {View, Text} from 'react-native';
import Halaman1 from './src/Halaman1';
import Halaman2 from './src/Halaman2';
import Layout from './src/Layout';
import FlexBasic from './src/FlexBasic';

const App1 = () => {
  return(
    <View>
      <Text style={{fontSize:50}}>Hello ARS</Text>
      <Halaman1 nama_depan="Erfian" nama_belakang="Junianto"/>
    </View>
  );
}

const App2 = () => {
  return(
    <>
      {/* <Text style={{fontSize:10}}>Hello Teknik Informatika</Text> */}
      {/* <Halaman2 /> */}
      {/* <Layout /> */}
      <FlexBasic />
    </>
  );
}

export default App1;