'use client';

import { useState } from 'react';
import styles from './sidebar.module.scss';
import { IconButton, SvgIconProps, Tooltip } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import GamesIcon from '@mui/icons-material/Games';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

interface MenuItem {
  title: string;
  icon: string;
  url: string;
  selected: boolean;
  hasSubMenu: boolean;
  subMenu?: MenuItem[];
}

const ICONS: Record<string, React.ComponentType<SvgIconProps>> = {
    HomeIcon,
    SettingsIcon,
    AddBusinessIcon
}
  

const Sidebar: React.FC = () => {
  const [menuList, setMenuList] = useState<MenuItem[]>([
    {
      title: 'Home',
      icon: 'HomeIcon',
      url: '/dashboard',
      selected: true,
      hasSubMenu: false,
    },
    {
        title: 'Business',
        icon: 'AddBusinessIcon',
        url: '/business',
        selected: false,
        hasSubMenu: false,
      },
    {
      title: 'Setting',
      icon: 'SettingsIcon',
      url: '/dashboard/setting',
      selected: false,
      hasSubMenu: false,
    },
  ]);
  const [toggle, setToggle] = useState<boolean>(false);

  const settingState = menuList.find(
    (list) => list.title.toLowerCase() === 'setting'
  );

  const handleMenuClick = (title: string) => {
    const updatedMenuList = menuList.map((item) => ({
      ...item,
      selected: item.title.toLowerCase() === title.toLowerCase(),
    }));
    setMenuList(updatedMenuList);
  };

  return (
    <>
      <div
        className={styles.sideBarShadow}
        style={{
          '--sidebar-width': toggle ? '285px' : '110px',
        } as React.CSSProperties}
      />
      <div className={styles.leftContainer}>
        <div
          className={styles.sideBarContainer}
          style={{
            '--sidebar-width': toggle ? '225px' : '80px',
          } as React.CSSProperties}
        >
          <div>
            <div className={styles.avatar}>
                <GamesIcon />
            </div>
            <div className={styles.iconList}>
              {menuList
                .filter((list) => list.title.toLowerCase() !== 'setting')
                .map((menu) => {
                    const IconComponent = ICONS[menu.icon]; // Get the icon component
                
                    return (
                        <Tooltip
                            title={toggle ? "" : menu.title}
                            arrow
                            key={menu.title}
                            placement="right"
                            className={menu.selected ? styles.selected : ""}
                            classes={{
                                tooltip: styles.tooltip,
                                arrow: styles.arrow,
                            }}
                        >
                            <div onClick={() => handleMenuClick(menu.title)}>
                                {IconComponent ? <IconComponent fontSize="small" /> : null}
                                {toggle && <span style={{ marginLeft: "10px" }}>{menu.title}</span>}
                            </div>
                        </Tooltip>
                    );
                })}                
            </div>
          </div>
        <Tooltip
            title={toggle ? '' : "Setting"}
            arrow
            placement="right"
            classes={{ tooltip: styles.tooltip, arrow: styles.arrow }}
        >
            <IconButton className={`${settingState?.selected ? styles.selected : ''} ${styles.setting}`} onClick={() => handleMenuClick('setting')}>
                <SettingsIcon />
                {toggle && <span style={{ marginLeft: "10px" }}>Setting</span>}
            </IconButton>
        </Tooltip>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
