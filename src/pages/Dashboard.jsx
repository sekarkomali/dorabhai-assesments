import React,{Component} from 'react';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  
  UploadOutlined,
} from '@ant-design/icons';
import AddUserForm from '../components/AddUserForm';
const {  Sider, Content } = Layout;

export default class Dashboard extends Component{
  state = {
    collapsed: false,
    addUser:false,
    allUser:true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"  onClick={() => { this.setState({ addUser: true }) }} icon={<UserOutlined />}>
              Add User
            </Menu.Item>
            <Menu.Item key="2"  onClick={() => { this.setState({ allUser: true, addUser: false }) }} icon={<UserOutlined />}>
              All User
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
         
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
               {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            {this.state.addUser ? <AddUserForm /> : this.state.allUser ? 'haii all users' : ""}
                            {}
                        </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
