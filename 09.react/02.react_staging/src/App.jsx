import React, { Component } from 'react'
import { Button, Tooltip, DatePicker, Space } from 'antd'
import { WechatOutlined, SearchOutlined } from '@ant-design/icons'
const { RangePicker } = DatePicker;

export default class App extends Component {
    onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    render() {
        return (
            <div>
                App
                <Button type="primary">Primary Button</Button>
                <Button>Button</Button>
                <WechatOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Tooltip title="小提示">
                    <Button shape="circle" icon={<SearchOutlined />} />
                </Tooltip>

                <br />
                <DatePicker onChange={this.onChange} />
                <Space direction="vertical" size={12}>
                    <RangePicker showTime onChange={this.onChange} />
                </Space>
            </div>
        )
    }
}
