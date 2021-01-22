import React, { Component } from 'react'
import { getCurrentInstance } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child2 from './child.jsx'

export default class Index extends Component {
	state = {
		name: '张三'
	}
	componentWillMount() {
		const { name } = getCurrentInstance().router.params
		console.info(name)
		this.setState({
			name
		})
	}

	componentDidMount() {}

	componentWillUnmount() {}

	componentDidShow() {}

	componentDidHide() {}

	showName = () => {
		console.info(this.state.name)
	}
	render() {
		const { name } = this.state
		return (
			<View className="index">
				<Child2 name={name} showName={this.showName} />
			</View>
		)
	}
}
