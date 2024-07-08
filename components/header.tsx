import tw from '@/tailwind';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/build/FontAwesome5';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';



const HeaderPage: React.FC = () => {
    const handleLogin = () => { };
    return (
        <View style={tw`bg-black h-[70px] flex flex-row items-center shadow-xl justify-center`}>
            <View>
                <Image source={require('../assets/images/container.png')} style={tw``} />
            </View>
            <View>
                <FontAwesome name='user-circle' size={30} color={'white'} />
            </View>

        </View>
    );
};

export default HeaderPage;

