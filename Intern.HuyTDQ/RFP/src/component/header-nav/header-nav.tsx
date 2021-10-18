import React from 'react';
import { Form, Icon, Image, Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './header-nav.scss';
function Header() {
  return (
    <Menu borderless className='top-menu'>
      {/* 2 */}
      <Menu.Menu className='nav-left'>
        <Menu.Item>
          <Icon className='header-icon' name='list' size='large'></Icon>
        </Menu.Item>
        <Menu.Item header className='logo'>
          <Link to='/'>
            <Image
              src='https://www.pngitem.com/pimgs/m/246-2468229_2000px-youtube-logo-svg-youtube-api-logo-png.png'
              size='tiny'
            />
          </Link>
        </Menu.Item>
      </Menu.Menu>

      {/* 3 */}
      <Menu.Menu className='nav-center'>
        <Menu.Item className='search-input'>
          <Form>
            {/* 4 */}
            <Form.Field>
              <Input className="search-bar" placeholder='Search' size='small' action='Go' />
            </Form.Field>
          </Form>
        </Menu.Item>
      </Menu.Menu>

        {/* 5 */}
        <Menu.Menu className='nav-right'>
          <Menu.Item>
            {/* 6 */}
            <Icon className='header-icon' name='video camera' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='grid layout' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='chat' size='large' />
          </Menu.Item>
          <Menu.Item>
            <Icon className='header-icon' name='alarm' size='large' />
          </Menu.Item>
          {/* 7*/}
          <Menu.Item name='avatar'>
            <Image src='https://via.placeholder.com/80x80' avatar />
          </Menu.Item>
        </Menu.Menu>
    </Menu>
  );
}

export default Header;
