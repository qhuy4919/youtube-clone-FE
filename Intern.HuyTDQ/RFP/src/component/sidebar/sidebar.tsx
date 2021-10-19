import React from 'react'
import {Menu, Divider} from 'semantic-ui-react';
import SidebarItem from './sidebar-item/sidebar-item';
import SidebarHeader from './sidebar-header/sidebar-header'
import SibarFooter from './sidebar-footer/sidebar-footer';
import './sidebar.scss';  
function Sidebar() {
    return (
        <Menu borderless vertical stackable fixed='left' className='side-nav'>
        <SidebarItem path='/' label='Home' icon='home'/>
        <SidebarItem path='/feed/trending' label='Trending' icon='fire'/>
        <SidebarItem label='Followers' icon='spy'/>
        <Divider/>
        <SidebarHeader title='Library'/>
        <SidebarItem label='History' icon='history'/>
        <SidebarItem label='Watch later' icon='clock'/>
        <SidebarItem label='Liked videos' icon='thumbs up'/>
        <Divider/>
        <SidebarHeader title='More from Youtube'/>
        <SidebarItem label='Movies and Shows' icon='film'/>
        <Divider/>
        <SidebarItem label='Report history' icon='flag'/>
        <SidebarItem label='Help' icon='help circle'/>
        <SidebarItem label='Send feedback' icon='comment'/>
        <Divider/>
        <SibarFooter/>
      </Menu>
    )
}

export default Sidebar
