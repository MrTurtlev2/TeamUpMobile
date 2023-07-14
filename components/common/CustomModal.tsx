import React from "react";
import {Modal} from "react-native";
import styled from "@emotion/native";
import colors from "../../constants/colors";
import CloseSvg from "../../assets/svg/CloseSvg";


const GhostWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors.transparentBlue};
`
const ContentWrapper = styled.View`
  width: 80%;
  height: 60%;
  background-color: ${colors.white};
  border-radius: 6px;
  padding: 40px 10px;
  justify-content: center;
  align-items: center;
`
const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
`

const CustomModal = ({visible, children, closeModal}: any) => {

    return (
        <Modal animationType="fade" visible={visible} transparent style={{flex: 1}}>
            <GhostWrapper>
                <ContentWrapper>
                    <CloseButton onPress={closeModal}>
                        <CloseSvg/>
                    </CloseButton>
                    {children}
                </ContentWrapper>
            </GhostWrapper>
        </Modal>
    )
}
export default CustomModal