import Button from '@/components/Button';
import tw from '@/tailwind';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { TextInput } from '@react-native-material/core';
import { useNavigation } from 'expo-router';
import Entypo from '@expo/vector-icons/build/Entypo';


const SigninSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is Required")
});
const ConfirmPage: React.FC = () => {
  const handleLogin = () => { };
  return (
    <View>
      <View style={tw` bg-[#2E2E2E] h-[700px] p-4`}>
        <View style={tw` py-10  text-center items-center`}>
          <Image source={require('../../assets/images/container.png')} style={tw`text-center items-center`} />
        </View>
        <View style={tw``}>
          <Text style={tw`font-medium text-[26px] text-white text-start`}>Create an account...</Text>
        </View>

        <View style={tw`text-center items-center`}>
          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={handleLogin}
            validationSchema={SigninSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
            }) => (
              <View style={tw`pt-8`}>
                {/* Name */}
                <View>
                  <View
                    style={tw`flex-row items-center  pt-2`}>
                    <TextInput
                      variant="filled"
                      color='black'
                      autoFocus={true}
                      style={tw` p-1  px-0 font-poppins font-bold`}
                      keyboardType={'name-phone-pad'}
                      onChangeText={handleChange('Name')}
                      returnKeyType="next"
                      onBlur={handleBlur('Name')}
                      label='Confirm your name.'
                      value={values.name}
                      placeholder={'Enter your name'}
                    />
                  </View>
                  {touched.name && errors.name && (
                    <Text style={tw`text-red-500`}>{errors.name}</Text>
                  )}
                </View>
                {/* Buttons */}
                <View style={tw`px-1`}></View>
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={tw`bg-[#6E00D9] text-center p-2.5 mt-4 h-10 rounded-full`}>
                  <Text
                    style={tw`text-white font-poppins text-base font-bold text-center`}>
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

        </View>
      </View>
    </View>
  );
};

export default ConfirmPage;

const styles = StyleSheet.create({
  input: {
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
});