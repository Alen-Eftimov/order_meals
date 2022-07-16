import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import HomeScreen from './src/screens/HomeScreen';
// import RestaurantDetailsScreen from './src/screens/RestaurantDetailsScreen';
// import DishDetailsScreen from './src/screens/DishDetailsScreen';
// import Basket from './src/screens/Basket';
// import OrdersScreen from './src/screens/OrdersScreen';
// import OrderDetails from './src/screens/OrderDetails';

import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        {/* Restaurant item */}
        {/* <RestaurantItem restaurant={restaurants[0]} />
        <RestaurantItem restaurant={restaurants[1]} /> */}
        {/* <FlatList
        data={restaurants} 
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
        /> */}
        {/* <HomeScreen /> */}
        {/* <RestaurantDetailsScreen /> */}
        {/* <DishDetailsScreen /> */}
        {/* <Basket /> */}
        {/* <OrdersScreen /> */}
        {/* <OrderDetails /> */}
        
        <RootNavigator />

        <StatusBar style="light" />
      {/* </View> */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // padding: 10,
//     // paddingVertical: 30, // temporary hack
//   },
// });
