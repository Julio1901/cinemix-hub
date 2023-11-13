import { ButtonContainer, ButtonIcon, ButtonTitle } from "./styles";

interface ButtonWithIconNotFilledProps {
    iconSrc: string;
    buttonName: string
  }

export const ButtonWithIconNotFilled: React.FC<ButtonWithIconNotFilledProps> = ({ iconSrc, buttonName }) => {

    return(
        <ButtonContainer>
            <ButtonIcon src={iconSrc}/>
            <ButtonTitle>{buttonName}</ButtonTitle>
        </ButtonContainer>    
    )


}