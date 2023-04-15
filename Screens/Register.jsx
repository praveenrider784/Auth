import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Flex, Heading, Input, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function Register() {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
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
          Create account using your email address
        </Heading>

        <Input
          placeholder="Email address"
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
          value={email}
          onChangeText={(val) => setemail(val)}
        ></Input>
      </VStack>
      <VStack>
        <Heading color={"gray.500"} fontSize={14} marginBottom={8}>
          By tapping "Continue",you agree to our Privacy Policy and Terms of
          Service
        </Heading>
        {email.length > 8 && (
          <Button
            bg="white"
            _text={{ color: "black", fontWeight: "bold" }}
            size={"lg"}
            _pressed={{ bg: "trueGray.400" }}
            borderRadius={"2xl"}
            onPress={() =>
              navigation.navigate("CodeScreen", {
                email: email,
              })
            }
          >
            Register
          </Button>
        )}
      </VStack>
    </Flex>
  );
}
