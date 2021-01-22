import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
// import * as utiils from '../../utils'
import { setDate, getDate } from '../../utils'
import img from '../../image/beatiful.jpg'
import './test.less'

export default class Test extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isShow: true,
			list: [
				{ id: 1, name: '测试1' },
				{ id: 2, name: '测试2' },
				{ id: 3, name: '测试3' },
				{ id: 4, name: '测试4' },
				{ id: 5, name: '测试5' },
				{ id: 6, name: '测试6' }
			]
		}
	}
	handleBack = () => {
		// Taro.navigateTo({url:'pages/index/index'}) //错的
		// Taro.navigateTo({url:'/pages/index/index'})
		// Taro.redirectTo({url:'/pages/index/index'}) //没有历史记录
		// Taro.navigateTo({url:'/pages/index/index?name=3'})
		// utiils.setDate()
		setDate(), getDate()
	}
	handleToggleShow = () => {
		this.setState((prevState) => {
			return {
				isShow: !prevState.isShow
			}
		})
	}
	render() {
		const { isShow, list } = this.state
		const dom = isShow || <Button onClick={this.handleBack}>跳转</Button>
		return (
			<View className="index">
				<View onClick={this.handleToggleShow}>测试页面</View>
				{dom}
				{/* <Image src={require('../../image/eslint3.png')}/> */}
				<Image src={img} className="image" />
				{list.map((item) => {
					return (
						<View key={item.id}>
							<Text>{item.name}</Text>
						</View>
					)
				})}
			</View>
		)
	}
}
