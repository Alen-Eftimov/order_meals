import { StyleSheet, View, FlatList } from 'react-native';
import RestaurantItem from '../../components/RestaurantItem';
import restaurants from '../../../assets/data/restaurants.json';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      {/* Restaurant item */}
       {/* <RestaurantItem restaurant={restaurants[0]} />
    //   <RestaurantItem restaurant={restaurants[1]} /> */}
      <FlatList
       data={restaurants} 
       renderItem={({ item }) => <RestaurantItem restaurant={item} />}
       showsVerticalScrollIndicator={false}
      />  
    </View>
    
  );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});