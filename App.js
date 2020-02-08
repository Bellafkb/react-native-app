import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [textList, setTextList] = useState([]);

  const textHandler = text => {
    setText(text);
  };

  const btnHandler = () => {
    setTextList([...textList, text]);
  };
  return (
    <View style={{ padding: 40 }}>
      <View>
        <Text style={{ margin: 10 }}>{text}</Text>
        <TextInput
          style={{
            height: 40,
            margin: 10,
            borderBottomWidth: 1,
            borderBottomColor: "black"
          }}
          onChangeText={textHandler}
        />

        <Button title="ADD" onPress={btnHandler} />
        <Text>sccop</Text>
        {textList.map((t,i) => (
          <Text key={i}>{t}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
