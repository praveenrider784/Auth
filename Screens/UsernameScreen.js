import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Flex, Heading, Input, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function UsernameScreen() {
  const navigation = useNavigation();
  const [name, setname] = useState("");
  return (
    <Flex
      safeArea
      flex={1}
      justifyContent={"space-between"}
      background="black"
      paddingX={5}
    >
      <VStack>
        <Heading
          color="white"
          marginBottom={5}
          fontSize={20}
          marginTop={10}
          justifyContent={"center"}
        >
          Next,create your username!!!
        </Heading>

        <Input
          placeholder="Your Username"
          type="email"
          fontSize={35}
          borderWidth={0}
          paddingLeft={"0"}
          fontWeight="bold"
          color={"white"}
          placeholderTextcolor={"trueGray.600"}
          _focus={{
            bg: "black",
            selectionColor: "white",
          }}
          value={name}
          onChangeText={(val) => setname(val)}
        ></Input>
      </VStack>
      <VStack>
        {name.length > 5 && (
          <Button
            bg="white"
            _text={{ color: "black", fontWeight: "bold" }}
            size={"lg"}
            _pressed={{ bg: "trueGray.400" }}
            borderRadius={"2xl"}
            onPress={() =>
              navigation.navigate("FinalScreen", {
                name: name,
              })
            }
          >
            Continue
          </Button>
        )}
      </VStack>
    </Flex>
  );
}
