import GoogleLogoSVG from "@/assets/Google";
import { ResizingButton } from "@/components/Buttons/resizable";
import InputField1 from "@/components/InputFields/InputField1";
import LayoutWrapper from "@/components/LayoutWrapper";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  return (
    <LayoutWrapper>
      <View className="bg-white flex-1 items-center justify-center px-4">
        <View className="w-full">
          <Text className="text-center font-poppins500 text-lg leading-[27px] mb-8">
            Login to proceed
          </Text>
          <InputField1
            placeholder={"Email"}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <InputField1
            placeholder={"Password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="mt-6"
          />
          <Pressable
            onPress={() => setChecked(!isChecked)}
            className="my-8 flex-row items-center"
          >
            <Checkbox
              value={isChecked}
              // onValueChange={setChecked}
              color={"#F46A62"}
              style={{ width: 18, height: 18, borderRadius: 5 }}
            />
            <Text className="font-poppins500 ml-2.5 text-xs">Remember me</Text>
          </Pressable>

          <ResizingButton
            title="Sign in"
            onPress={() => router.replace("/(tabs)")}
            className="bg-[#F46A62] py-4"
            textStyles="text-base text-white"
            isLoading={false}
            isDisabled={false}
          />
          <Text className="text-xs leading-[18px] font-poppins500 my-6 text-center">
            Or
          </Text>
          <ResizingButton
            title="Google"
            Icon={GoogleLogoSVG}
            onPress={() => {}}
            className="bg-[#FFF6F5] py-4 border border-[#F46A62]"
            textStyles="text-base text-black"
            isLoading={false}
            isDisabled={false}
          />
        </View>
      </View>
    </LayoutWrapper>
  );
}
