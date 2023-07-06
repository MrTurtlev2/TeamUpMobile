import React from "react";
import {ActivityIndicator, Dimensions, Modal} from "react-native";
import styled from "@emotion/native";
import colors from "../../constants/colors";

const StyledModal = styled(Modal)`
  height: ${Dimensions.get('screen').height + 'px'};
  width: ${Dimensions.get('screen').width + 'px'};
`
const ModalBody = styled.View`
  flex: 1;
  background-color: ${colors.white};
  opacity: 0.6;
  justify-content: center;
  align-items: center;
`


const LoadingModal = () => {

    return (
        <StyledModal
            animationType="fade"
            transparent={true}
            visible={true}
        >
            <ModalBody>
                <ActivityIndicator size="large" color={colors.blue}/>
            </ModalBody>
        </StyledModal>
    )
}
export default LoadingModal