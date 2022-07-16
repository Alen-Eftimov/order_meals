import { View, Text, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DishListItem from '../../components/DishListItem';
import Header from './Header';
import styles from './styles';
import restaurants from '../../../assets/data/restaurants.json';

import { useRoute, useNavigation } from '@react-navigation/native';

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params?.id;
    console.warn(id);

    return (
        <View style={styles.page}>
            {/* <Image
             source={{uri: restaurant.image}} 
             style={styles.image} 
            />             */}
            
            {/* <View style={styles.container}>
               <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>
                    € {restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-
                    {restaurant.maxDeliveryTime} minutes
                </Text> 
            </View>  */}

            {/* <DishListItem dish={restaurant.dishes[0]} /> 
            <DishListItem dish={restaurant.dishes[2]} />
            <DishListItem dish={restaurant.dishes[1]} />    */}

            <FlatList
             ListHeaderComponent={() => <Header restaurant={restaurant} />}
             data={restaurant.dishes}  
             renderItem={({item}) => <DishListItem dish={item}/>} 
             keyExtractor={(item) => item.name}
            /> 
            <Ionicons
            onPress={() => navigation.goBack()}
              name='arrow-back-circle'
              size={45}
              color='white'
              style={styles.iconContainer}
            />  
        </View>
    );
};

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,    
//     },
//     // image: {
//     //     width: '100%',
//     //     aspectRatio: 5 / 3,
//     // },
//     iconContainer: {
//         position: 'absolute',
//         top: 40,
//         left: 10,
//     },
//     // title: {
//     //     fontSize: 35,
//     //     fontWeight: '600',
//     //     marginVertical: 10,
//     // },
//     // subtitle: {
//     //     fontSize: 15,
//     //     color: '#525252',
//     // },
//     // container: {
//     //     margin: 10,
//     // },
// });

export default RestaurantDetailsPage;