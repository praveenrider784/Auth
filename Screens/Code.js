import { View, Text } from "react-native";
import { Button, Flex, Heading, Input, VStack } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const Code = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mail = route.params.email;
  const [otp, setotp] = useState("");
  const [counter, setcounter] = useState(30);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setcounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
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
          Enter the code we sent to {mail}
        </Heading>

        <Input
          placeholder=". . . . . ."
          fontSize={35}
          borderWidth={0}
          paddingLeft={"0"}
          fontWeight="bold"
          color={"white"}
          placeholderTextcolor={"trueGray.600"}
          maxLength={6}
          _focus={{
            bg: "black",
            selectionColor: "white",
          }}
          value={otp}
          onChangeText={(val) => setotp(val)}
        ></Input>
      </VStack>
      <VStack>
        {otp.length == 6 ? (
          <Button
            bg="white"
            _text={{ color: "black", fontWeight: "bold" }}
            size={"lg"}
            _pressed={{ bg: "trueGray.400" }}
            borderRadius={"2xl"}
            onPress={() => navigation.navigate("UsernameScreen")}
          >
            Verify
          </Button>
        ) : (
          <Button
            bg="white"
            _text={{ color: "black", fontWeight: "bold" }}
            size={"lg"}
            _pressed={{ bg: "trueGray.400" }}
            borderRadius={"2xl"}
            // onPress={() => navigation.navigate("UsernameScreen")}
          >
            Resend in 30s
          </Button>
        )}
      </VStack>
    </Flex>
  );
};

export default Code;
