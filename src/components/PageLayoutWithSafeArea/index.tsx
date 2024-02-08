import { Keyboard } from "react-native"

import { DismissArea, KeyboardAvoiding, SafeArea } from "./styles"

interface Props {
    children: React.ReactNode
    dismissKeyboard?: boolean
}

const PageLayoutWithSafeArea: React.FC<Props> = ({ children, dismissKeyboard }) => (
    <SafeArea>
        <KeyboardAvoiding>
            {dismissKeyboard ? (
                <DismissArea onPress={Keyboard.dismiss} android_disableSound>
                    {children}
                </DismissArea>
            ) : children}
        </KeyboardAvoiding>
    </SafeArea>
)

export default PageLayoutWithSafeArea
