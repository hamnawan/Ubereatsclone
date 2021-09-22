import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setactiveTab] = useState("Delivery");
    return (
        <View style = {{flexDirection: 'row',alignSelf: "Center",}}>
           <HeaderButton  
            text = "Delivery" 
            btnColor = "black" 
            textColor= "white" 
            activeTab= {activeTab} 
            setactiveTab= {setactiveTab}/>

            <HeaderButton  
            text = "Pick Up" 
            btnColor = "white" 
            textColor= "black" 
            activeTab= {activeTab} 
            setactiveTab= {setactiveTab}
            />
          
        </View>
    )
}

const HeaderButton = (props) => (
    
        <TouchableOpacity style ={{
            backgroundColor: props.activeTab === props.text? 'black' : 'white',
            paddingVertical:  6,
            paddingHorizontal:16,
            borderRadius: 30,
            }}
            onPress = {() => props.setactiveTab(props.text)}
            >
                
         <Text style = {{color:  props.activeTab === props.text? "white" : "black", fontSize: 15, fontWeight:"900",}}>{props.text}</Text>
         </TouchableOpacity>
 
    
)
