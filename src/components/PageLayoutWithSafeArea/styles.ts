import styled from "styled-components/native"
import { Platform, StatusBar } from "react-native"

export const SafeArea = styled.SafeAreaView`
    flex: 1;
    padding-top: ${Platform.OS === "android" ? `${StatusBar.currentHeight}px` : 0};
`

export const KeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.OS === 'android' ? 'height' : 'padding'
})`
    flex: 1;
`;

export const DismissArea = styled.Pressable`
    flex: 1;
`;
