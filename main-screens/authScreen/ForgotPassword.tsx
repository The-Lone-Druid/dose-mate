import tw from '@/tailwind';
import { Formik } from 'formik';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Yup from 'yup';
import { TextInput } from '@react-native-material/core';


const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is Required")
    .matches(new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(?:.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"), "Email is Invalid"),
});
const ForgotPassword: React.FC = () => {

  const handlePassword = () => { };
  return (
    <View>
      <View style={tw` bg-[#2E2E2E] h-[700px] p-4`}>
        <View style={tw` py-10  text-center items-center`}>
          <Image source={require('../../assets/images/container.png')} style={tw`text-center items-center`} />
        </View>
        <View>
          <Text style={tw`font-medium text-[26px] text-white text-start`}>Forgot Password.</Text>
        </View>
        <View style={tw`text-center items-center`}>
          <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={handlePassword}
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
                  <View style={tw`text-start py-2`}>
                    <Text style={tw`font-medium text-[16px] text-white text-start`}>Please enter your email, we’ll share a link to reset your password.</Text>
                  </View>
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
                      label='Confirm your email.'
                      value={values.email}
                      placeholder={'Enter your email.'}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={tw`text-red-500`}>{errors.email}</Text>
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
                    Submit
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

export default ForgotPassword;