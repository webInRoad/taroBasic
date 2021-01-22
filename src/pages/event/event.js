import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'

console.info('环境：' + process.env.TARO_ENV)
export default class Event extends Component {
	state = {
		name: '张建辉'
	}
	// handleClick(event) {
	// 	console.info(this.state.name)
	// 	console.info(event)
	// 	event.stopPropagation() //阻止冒泡
	// }

	handleArgumentsClick(name, test, event) {
		console.info(event)
		// event.stopPropagation()
	}
	render() {
		return (
			<View
				className="index"
				onClick={() => {
					console.info(2323)
				}}
			>
				{/* <Button onClick={this.handleClick}>点击</Button> */}
				{/* <Button onClick={this.handleClick.bind(this)}>点击</Button> */}
				<Button
					onClick={this.handleArgumentsClick.bind(
						this,
						this.state.name,
						'test'
					)}
				>
					点击
				</Button>
			</View>
		)
	}
}
