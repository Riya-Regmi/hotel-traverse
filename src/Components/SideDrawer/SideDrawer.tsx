import { Layout, Menu } from 'antd';
import './SideDrawer.css';

import Logo from '../../assests/logo/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalculator,
  faComputer,
  faGauge,
  faKey,
  faPenToSquare,
  faSuitcase,
  faUser,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
// import { Item } from '../../Data/SidebarMenu';

const { Sider, Content } = Layout;

type SiderProps = {
  collapsed?: boolean;
};
const Item = {
  options: [
    {
      key: 0,
      label: 'Main',
      name: 'menu',
    },
    {
      key: 1,
      label: 'Dashboard',
      icon: <FontAwesomeIcon icon={faGauge} />,

      name: 'submenu',
    },
    {
      key: 2,
      label: 'Booking',
      icon: <FontAwesomeIcon icon={faSuitcase} />,
      children: [],
      name: 'submenu',
    },
    {
      key: 3,
      label: 'Customers',
      icon: <FontAwesomeIcon icon={faUserGroup} />,
      children: [],
      name: 'submenu',
    },
    {
      key: 4,
      label: 'Rooms',
      icon: <FontAwesomeIcon icon={faKey} />,
      children: [],
      name: 'submenu',
    },
    {
      key: 5,
      label: 'Staff',
      icon: <FontAwesomeIcon icon={faUser} />,
      children: [],
      name: 'submenu',
    },

    {
      key: 6,
      label: 'UI Element',
      name: 'menu',
    },
    {
      key: 7,
      label: 'Components',
      icon: <FontAwesomeIcon icon={faComputer} />,
      children: [],
      name: 'submenu',
    },
    {
      key: 8,
      label: 'Forms',
      icon: <FontAwesomeIcon icon={faPenToSquare} />,
      children: [],
      name: 'submenu',
    },
    {
      key: 9,
      label: 'Tables',
      icon: <FontAwesomeIcon icon={faCalculator} />,
      children: [],
      name: 'submenu',
    },
  ],
};

export const SideDrawer = ({ collapsed }: SiderProps) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={250}
      breakpoint='md'
      style={{ backgroundColor: '#000000' }}
    >
      <div className='logo' />
      <div className='logo-section'>
        <span>
          <img src={Logo} />
        </span>
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{
          backgroundColor: '#000000',
          color: 'white',

          fontWeight: '500',
        }}
        items={Item.options}
      />
    </Sider>
  );
};
