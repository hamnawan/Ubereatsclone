import React, {useState}  from 'react';
import { View, Text, SafeAreaView, } from 'react-native';
import Categories from '../components/categories';

import HeaderTabs from '../components/headerTabs';
import Restaurant, {localRestaurants} from '../components/restaurant';
import SearchBar from '../components/searchbar';

const api_key = "wdTPwxQ8YjzJuPUEfEb-uF_QaPcGeIRp2pdFQ-JkN2ekcf7zECtaDFTK0lv3s175DTOll00ceYkTENm1iEJk1C9f_FcE1iDjkrsy8KRDSoieGUE3JMVsqFeLf4xMYXYx"
export default function Home() {

// const getrestaurantData = () => 
// {
//     const ylpurl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego';
// }
// const apiOptions = {
//       headers: {
//         Authorization: `Bearer ${YELP_API_KEY}`,
//       },
//     };

    const [restaurantdata, setrestaurantdata] = useState(localRestaurants)
    return (
        <SafeAreaView style = {{backgroundColor: '#eee', flex: 1,}}>
            <View style ={{backgroundColor: 'white', padding:15,}}>
            <HeaderTabs />
            <SearchBar />
            </View>
            <Categories />
            <Restaurant restaurantdata = {restaurantdata} />
        </SafeAreaView>

    )
}
