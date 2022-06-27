import React from 'react';
import {
   SidebarContainer, Icon,
    CloseIcon, SidebarMenu, SidebarLink,
    SidebarWrapper, SideBtnWrap, SidebarRoute
} from './SidebarElement';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover' onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>
                        Signup
                    </SidebarLink>
                    <SideBtnWrap>
                        <SidebarRoute to='/'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
