import { Pressable, Text, View, Image } from 'react-native';
import React from 'react';
import tw from '../../tailwind'
import { Ionicons } from '@expo/vector-icons';
import Button from '@/components/Button';

type Props = {};

const SplashScreen1 = (props: Props) => {
  return (
    <View style={tw` bg-[#2E2E2E] p-4`}>
      {/* <ActivityIndicator size="large" color="#fff" /> */}
      <View style={tw` py-10  text-center items-center`}>
        <Image source={require('../../assets/images/container.png')} style={tw`text-center items-center`} />
        <View style={tw`flex flex-row gap-4 mt-4`}>
          <View style={tw`border border-white w-[40px]`}></View>
          <View style={tw`border border-slate-500 w-[40px]`}></View>
          <View style={tw`border border-slate-500 w-[40px]`}></View>

        </View>
      </View>
      <View style={tw`text-center items-center justify-around`}>
        <Text style={tw`font-semibold text-[26px] text-white w-[80%] text-center`}>A mate that cares for your health</Text>
      </View>
      <View style={tw`text-center items-center`}>
        <Image source={require('../../assets/images/screen1.png')} style={tw`text-center items-center `} />
      </View>
      <View style={tw`text-center items-center`}>
        <View style={tw`flex flex-row gap-4`}>
        <Button title='Skip' style={[tw`w-[100px]`]} type="primary-light" onPress={() => { }} />
        <Button title='Next' style={[tw`w-[100px]`]} type="primary" onPress={() => { }} />

        </View>
        
      </View>
    </View>
  );
};

export default SplashScreen1;

