import styled from "styled-components";
import { theme } from "../../theme";

export const CustomInput = styled.input`
  z-index: 1;
  width: ${(props) => props.width || "auto"};
  max-width: ${(props) => props.maxWidth || "auto"};
  height: ${(props) => props.height || "auto"};
  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: ${(props) => props.fontWeight || "bold"};
  color: ${(props) => props.fontColor || "#FFFFFF"};
  padding: ${(props) => props.padding || 0};
  line-height: ${(props) => props.lineHeight || 0};
  text-align: ${(props) => props.align || "start"};
  border: ${(props) => props.border || ""};
  outline: ${(props) => props.outline || "none"};
  border-radius: ${(props) => props.borderRadiux || "10px"};
  border-color: ${(props) => props.borderColor || ""};
  border-width: ${(props) => props.borderWidth || 0};
  background: ${(props) => props.background || "transparent"};
  background-color: ${(props) => props.backgroundColor || theme.primaryLight};
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(255, 255, 255, 0.5);
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgba(255, 255, 255, 0.5);
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgba(255, 255, 255, 0.5);
  }
`;
