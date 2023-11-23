import { ButtonContainer, ButtonIcon, ButtonTitle } from "./styles";

interface ButtonWithIconNotFilledProps {
    iconSrc: string
    buttonName: string
    onClick?: () => void
  }

export const ButtonWithIconNotFilled: React.FC<ButtonWithIconNotFilledProps> = ({ iconSrc, buttonName, onClick }) => {

    return(
        <ButtonContainer onClick={onClick}>
            <ButtonIcon src={iconSrc}/>
            <ButtonTitle>{buttonName}</ButtonTitle>
        </ButtonContainer>    
    )


}