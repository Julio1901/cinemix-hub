import { ButtonWithIconNotFilled } from "../buttonWithIconNotFilled/ButtonWithIconNotFilled"
import { BottomIconsContainer, Logo, MainContainer, MiddleIconsContainer, TopIconsContainer } from "./styles"

export const LateralMenu = () => {
    const iconFilm = require('../../../assets/icons/icon_film.png')  
    const iconHeart = require('../../../assets/icons/icon_heart.png')  
    const iconArrowUp = require('../../../assets/icons/icon_arrow_up.png')  
    const iconCalendar = require('../../../assets/icons/icon_calendar.png')  
    const logo = require('../../../assets/logos/watch_logo.png')
    const usersIcon = require('../../../assets/icons/icon_users.png')
    const messageIcon = require('../../../assets/icons/icon_message-circle.png')
    const slidersIcon = require('../../../assets/icons/icon_sliders.png')
    const logOutIcon = require('../../../assets/icons/icon_log-out.png')
    
    return(
        <MainContainer>

            <Logo src={logo} />
            <TopIconsContainer>
                <ButtonWithIconNotFilled iconSrc={iconFilm} buttonName="Home"/>
                <ButtonWithIconNotFilled iconSrc={iconHeart} buttonName="Favorites"/>
                <ButtonWithIconNotFilled iconSrc={iconArrowUp} buttonName="Trending"/>
                <ButtonWithIconNotFilled iconSrc={iconCalendar} buttonName="Coming soon"/>
            </TopIconsContainer>
            <MiddleIconsContainer>
                <ButtonWithIconNotFilled iconSrc={usersIcon} buttonName="Community"/>
                <ButtonWithIconNotFilled iconSrc={messageIcon} buttonName="Social"/>
            </MiddleIconsContainer>
            <BottomIconsContainer>
             <ButtonWithIconNotFilled iconSrc={slidersIcon} buttonName="Settings"/>
             <ButtonWithIconNotFilled iconSrc={logOutIcon} buttonName="Logout"/>
            </BottomIconsContainer>
            
        </MainContainer>
    )
}