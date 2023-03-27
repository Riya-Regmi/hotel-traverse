import React from 'react';
import './Header.css';
import MenuIcon from '../../assests/icons/menu-3-lines-icon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import BellIcon from '../../assests/icons/bellIcon.svg';
import messageIcon from '../../assests/icons/messageIcon.svg';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import ProfilePic from '../../assests/images/ProfilePic.webp';
type HeaderProps = {
  collapseStatus?: (collapsed: boolean) => void;
  collapsed?: boolean;
};

const items: MenuProps['items'] = [
  {
    key: '1',
    label: <a>1st menu item</a>,
  },
  {
    key: '2',
    label: <a>2nd menu item</a>,
  },
];

export const Header = ({
  collapseStatus = () => {},
  collapsed,
}: HeaderProps) => {
  return (
    <div className='header'>
      <div className='header-content'>
        <div className='row'>
          <div className=' col-3 col-md-1 header-menu-icon-section'>
            <img
              src={MenuIcon}
              onClick={(e) => {
                e.preventDefault();
                collapseStatus(!collapsed);
              }}
            />
          </div>
          <div className='col-md-4 col-9'>
            <span className='header-search-icon'>
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type='text'
              className='header-search-bar'
            />
          </div>
          <div className='col-md-7 header-notifications-section'>
            <span className='header-individual-notification'>
              <span className='header-notification-count header-bell-notification-count-position'>
                3
              </span>
              <img
                src={BellIcon}
                className='header-notification-icon'
              />
            </span>
            <span className='header-individual-notification'>
              <span className='header-notification-count header-msg-notification-count-position'>
                7
              </span>
              <img
                src={messageIcon}
                className='header-notification-icon'
              />
            </span>
            <span className='header-admin-section'>
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <img src={ProfilePic} />
                    <span>Admin</span>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className='header-dropdown-icon'
                    />
                  </Space>
                </a>
              </Dropdown>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
