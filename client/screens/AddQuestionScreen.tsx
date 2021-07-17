import * as React from "react";
import {useContext, useState} from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity} from "react-native"
import Screen from "../components/Screen";
import {addQuestion} from "../api/questionApi";
import Context from "../context/context";

const AddQuestionScreen = ({route}) => {

    const context = useContext(Context)

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [optionTwo, setOptionTwo] = useState("");
    const [optionThree, setOptionThree] = useState("");
    const [optionFour, setOptionFour] = useState("");

    return (
        <Screen>
            <Text style={styles.text}>Question</Text>
            <TextInput
                maxLength={200}
                multiline numberOfLines={4}
                style={styles.multilineInput}
                value={question}
                onChangeText={setQuestion}
            />

            <Text style={styles.text}>Correct answer</Text>
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={answer}
                onChangeText={setAnswer}
            />

            <Text style={styles.text}>Other options</Text>
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionTwo}
                onChangeText={setOptionTwo}
            />
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionThree}
                onChangeText={setOptionThree}
            />
            <TextInput
                maxLength={40}
                style={styles.singleLineInput}
                value={optionFour}
                onChangeText={setOptionFour}
            />
            <TouchableOpacity
                style={styles.saveButton}
                onPress={() => {
                    addQuestion({
                        book: route.params.title,
                        answer: answer,
                        options: [answer, optionTwo, optionThree, optionFour],
                        question: question,
                        questionAuthor: context.email,
                    })
                }}
            >
                <Text>Save</Text>
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold"
    },
    multilineInput: {
        height: 80,
        margin: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    singleLineInput: {
        height: 40,
        margin: 12,
        padding: 8,
        borderWidth: 1,
        borderRadius: 10,
    },
    saveButton: {
        width: 100,
        height: 30,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1,
        alignContent: "center",
        alignItems: "center",
    }
});

export default AddQuestionScreen;