import React,{Component} from 'react'
import {View,Text} from '@tarojs/components'

class Child extends Component {
    render() {
        const {name,showName} = this.props
        return (
            <View>
                <Text onClick={showName}>我是子节点{name}</Text>
            </View>
        )
    }
}

export default Child