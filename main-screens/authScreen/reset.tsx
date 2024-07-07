import tw from '@/tailwind';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '@/components/Button';



const ResetPage: React.FC = () => {

    return (
        <View>
            <View style={tw` bg-black p-4`}>
                {/* <ActivityIndicator size="large" color="#fff" /> */}
                <View style={tw` py-10  text-center items-center`}>
                    <Image source={require('../../assets/images/container.png')} style={tw`text-center items-center`} />
                </View>
                <View style={tw`text-start py-2 mb-4`}>
                    <Text style={tw`font-medium text-[16px] text-white text-center`}>
                        Great, we’ve sent you a link to reset your password, if you haven’t received, you can try again or contact our support team.
                    </Text>
                </View>
                <View style={tw`text-center items-center`}>
                    <Image source={require('../../assets/images/Mailsent-rafiki.png')} style={tw`text-center items-center `} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        // handleSubmit();
                    }}
                    style={tw`bg-[#6E00D9] text-center p-2.5 mt-4 h-10 rounded-full`}>
                    <Text
                        style={tw`text-white font-poppins text-base font-bold text-center`}>
                        Continue
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default ResetPage;