import HeaderPage from '@/components/header';
import tw from '@/tailwind';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const capsuleData = [
    {
        id: 0,
        image: '../../assets/images/capsul.png',
        name: 'Rabisec DSR',
        count: '1 Tablet',
        time: 'Before Lunch at 09:30 PM',
    },
    {
        id: 1,
        image: '../../assets/images/capsul.png',
        name: 'Glimidib M1-SR',
        count: '1 Tablet',
        time: 'After Lunch at 11:41 PM',
    },
    {
        id: 2,
        image: '../../assets/images/medi.png',
        name: 'Macbery - XT',
        count: '10 ML - 3 times.',
        time: 'at: 11:41 PM',
    },
    {
        id: 3,
        image: '../../assets/images/capsul.png',
        name: 'Rabisec DSR',
        count: '1 Tablet',
        time: 'Before Lunch at 09:30 PM',
    },
]

const HomePage: React.FC = () => {
    return (
        <View>
            <HeaderPage />
            <View style={tw` bg-[#2E2E2E] h-[600px] p-4`}>
                <Text style={tw`font-semibold text-[18px] text-white text-start pb-3`}>Upcoming Reminders</Text>
                <View style={tw`gap-2 h-[90%] overscroll-auto`}>
                    {capsuleData.map((item: any) => (
                        <View key={item} style={tw`border rounded-lg bg-black p-2`}>
                            <View style={tw`flex flex-row items-center gap-2`}>
                                <Image source={{ uri: item.image }} style={tw``} />
                                <Text style={tw`font-semibold text-[16px] text-white text-start`}>{item.name}</Text>
                            </View>
                            <View style={tw`flex flex-row justify-between mt-2 p-2`}>
                                <Text style={tw`font-medium text-[10px] text-white text-start`}>{item.count}</Text>
                                <Text style={tw`font-medium text-[10px] text-white text-start`}>{item.time}</Text>

                            </View>

                        </View>
                    ))}
                </View>


            </View>
        </View>
    );
};

export default HomePage;

