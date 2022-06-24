import React from 'react';
import {
    SideBar, SidebarContainer, Icon,
    CloseIcon, SidebarMenu, SidebarLink,
    SidebarWrapper, SideBtnWrap, SidebarRoute
} from 'SidebarElements';

const SideBar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover'>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services'>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup'>
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

export default SideBar;
