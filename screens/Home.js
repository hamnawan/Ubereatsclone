import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'
import Categories from '../components/categories'

import HeaderTabs from '../components/headerTabs'
import Restaurant from '../components/restaurant'
import SearchBar from '../components/searchbar'



export default function Home() {
    return (
        <SafeAreaView style = {{backgroundColor: '#eee', flex: 1,}}>
            <View style ={{backgroundColor: 'white', padding:15,}}>
            <HeaderTabs />
            <SearchBar />
            </View>
            <Categories />
            <Restaurant />
        </SafeAreaView>
    
    )
}

const RestaurantImage = () => (
<Image  
source = {{uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.businesslist.pk%2Fcategory%2Frestaurants&psig=AOvVaw3qla9M4nqDiKp0kbKcqe5p&ust=1632328570649000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCkh_m_kPMCFQAAAAAdAAAAABAD"}} 
style = {{width: "100%",height:180}}/>
);