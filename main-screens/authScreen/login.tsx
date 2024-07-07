import tw from '@/tailwind';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { TextInput } from '@react-native-material/core';
import Entypo from '@expo/vector-icons/build/Entypo';


const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .matches(new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(?:.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"),
     "Email is Invalid"),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short'),
});
const LoginPage: React.FC = () => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);


  const handleLogin = () => { };

  return (
    <View>
      <View style={tw` bg-[#2E2E2E] p-4`}>
        <View style={tw` py-10  text-center items-center`}>
          <Image source={require('../../assets/images/container.png')} style={tw`text-center items-center`} />
        </View>
        <View >
          <Text style={tw`font-medium text-[26px] text-white text-start`}>Signin to your accout...</Text>
        </View>

        <View style={tw`text-center items-center`}>
          <Formik
            initialValues={{
              email: '',
              password: '',
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
                {/* Email */}
                <View>
                  <View
                    style={tw`flex-row items-center  pt-2`}>
                    <TextInput
                      variant="filled"
                      color='black'
                      autoFocus={true}
                      style={tw`flex-1 p-1 px-0 font-poppins font-bold`}
                      keyboardType={'email-address'}
                      onChangeText={handleChange('email')}
                      returnKeyType="next"
                      onBlur={handleBlur('email')}
                      label='Email'
                      value={values.email}
                      placeholder={'Enter your Email'}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={tw`text-red-500`}>{errors.email}</Text>
                  )}
                </View>
                {/* Password */}
                <View>
                  <View
                    style={tw`flex-row items-center  pt-2`}>
                    <TextInput
                      variant="filled"
                      color='black'
                      label="Password"
                      style={tw`flex-1 p-1 px-0 font-poppins font-bold`}
                      secureTextEntry={isPasswordSecure == true ? false : true}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      placeholder={'Enter your Password'}
                    />
                    <Entypo
                      onPress={() => { setIsPasswordSecure(isPasswordSecure == false ? true : false) }} name={isPasswordSecure == true ? "eye" : "eye-with-line"}
                      style={{
                        position: 'absolute',
                        right: 20,
                      }} color={'#99A0A3'} size={22} />
                  </View>
                  {touched.password && errors.password && (
                    <Text style={tw`text-red-500 mb-2`}>
                      {errors.password}
                    </Text>
                  )}
                  <View style={tw`flex-row pb-2 items-end justify-end`}>
                    <Text onPress={() => { }} style={tw`text-sm text-blue-600 font-poppins `}>Forgot Password?</Text>
                  </View>
                </View>
                {/* Buttons */}
                <View style={tw`px-1`}></View>
                <TouchableOpacity
                  onPress={() => {
                    handleSubmit();
                  }}
                  style={tw`bg-[#6E00D9] text-center p-2.5  h-10 rounded-full`}>
                  <Text
                    style={tw`text-white font-poppins text-base font-bold text-center`}>
                    Submit
                  </Text>
                </TouchableOpacity>
                
                <View style={tw` flex-col items-center justify-around py-2`}>
                  <View>
                    <Text
                      style={tw`text-center py-1 text-white text-xs font-poppins`}>
                      Don’t have an account? <span style={tw`text-blue-600`}>Create One.</span>
                    </Text>
                  </View>
                  <View style={tw`pt-2 items-center  flex flex-row gap-1`}>
                    <View style={tw`border-slate-600 border  w-[120px]`}></View>
                    <Text style={tw` text-white`}>OR</Text>
                    <View style={tw`border-slate-600  border w-[120px]`}></View>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    // handleSubmit();
                  }}
                  style={tw`bg-[#DB4437] text-center p-3  h-10 rounded-full`}>
                  <Text
                    style={tw`text-white font-poppins text-sm font-bold text-center`}>
                    Continue With Google
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

export default LoginPage;