import React, { Component } from 'react'
import { View, Text, Image, Button } from '@tarojs/components'
import Dialog from './dialog'

export default class TestDialog extends Component {
	render() {
		return (
			<View className="index">
				<Dialog secondChild={<View>相当于slot</View>}>
					<Text>2323</Text>
				</Dialog>
				<Dialog>
					<Image src={require('../../image/beatiful2.jpg')}></Image>
				</Dialog>
				<Dialog>
					<Button>点击</Button>
				</Dialog>
			</View>
		)
	}
}
