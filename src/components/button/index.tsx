import * as React from 'react'
import { View } from '@tarojs/components'

const Button = () => {
  const [msg, setMsg] = React.useState('')

  React.useEffect(() => {
    setMsg('按钮')
  }, [])

  return (
    <View>{msg}</View>
  )
}

export default Button