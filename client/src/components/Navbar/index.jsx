import React from 'react';
import { Link } from 'react-router-dom';
import { ME } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import {  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,} from '@ant-design/icons'
import {  Breadcrumb, Layout, Menu, theme  } from 'antd';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
  getItem('Tom', '3'),
  getItem('Bill', '4'),
  getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Layout.Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Layout.Sider>
      
    </Layout>
  );
};





























// function Navbar() {
//   const {loading, error, data} = useQuery(ME)
//   const isThereData = data && true
//   let loggedOutNavItems = ``
 
//   const userType = data?.me.__typename || 'user'
//   //checking if the person is logged in

//   let navItems = []
//   //checking what nav items to display
//   if (userType === 'Parent'){
//     navItems = [
//       "Rewards",
//       "Tasks",
//       "Kids",
//       "Logout",
//     ]
//   }else if (userType === 'Child'){
//     navItems = [
//       "Rewards",
//       "Tasks",
//       "Kids",
//       "Logout",
//     ]
//   }else{
//     navItems = [
//       "Login",
//       "Signup",
//     ]
//   }
//   return (
//     <nav style={styles.navbar}>
//       <ul style={styles.navList}>
//         {navItems.map(item=>{
//           return (
//             <li style={styles.navItem} key={item}>
//               <Link to={`/${item}`} style={styles.link}>{item}</Link>
//           </li>
//           )
//         })}
//       </ul>
//     </nav>
//   );
// }

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default SideMenu;
