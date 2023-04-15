import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { Flex, Heading } from 'native-base'
import { useRoute } from '@react-navigation/native'

const FinalScreen = () => {
    const route=useRoute();
    const name=route.params.name;
  return (
    <Flex flex={1}  background={"black"}  justifyContent={"center"} alignItems={"center"}>

    <Heading fontSize={25} color="white">welcome {name}</Heading>

    </Flex>
  )
}

export default FinalScreen