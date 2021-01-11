import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components'
// import * as utiils from '../../utils'
import {setDate,getDate} from '../../utils'
import img from '../../image/eslint3.png'
import './test.less'

export default class Test extends Component {

    handleBack = () => {
        // Taro.navigateTo({url:'pages/index/index'}) //错的
        // Taro.navigateTo({url:'/pages/index/index'})
        // Taro.redirectTo({url:'/pages/index/index'}) //没有历史记录
        // Taro.navigateTo({url:'/pages/index/index?name=3'})
        // utiils.setDate()
        setDate(),getDate();
    }
  render () {
    return (
      <View className='index'>
          测试页面
          <Button onClick={this.handleBack}>跳转</Button>
          {/* <Image src={require('../../image/eslint3.png')}/> */}
          <Image src={img} className="image"/> 
      </View>
    )
  }
}
