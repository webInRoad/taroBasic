import React, { Component } from 'react'
import { View } from '@tarojs/components'

export default class Dialog extends Component {
	render() {
		return (
			<View className="index">
				{this.props.secondChild}
				{this.props.children}
			</View>
		)
	}
}
