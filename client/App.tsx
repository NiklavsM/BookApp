import * as React from 'react';
import MainNavigator from "./navigation/MainNavigator";
import {StatusBar} from 'expo-status-bar';
import GlobalState from "./context/GlobalState";
import QuizScreen from './screens/QuizScreen';

export default function App() {

    return (
        <GlobalState>
             {/*<StatusBar style="auto"/>*/}
             <MainNavigator/>
        {/*    <QuizScreen/>*/}
         </GlobalState>
    );
}

