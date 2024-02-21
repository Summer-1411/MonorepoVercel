import { useState, useEffect } from 'react'
import { Layout, Page, Text, List, Code } from '@vercel/examples-ui'
import { Button } from '@acme/ui'
import { matchingTextColor, randomColor } from '@acme/ui'

export default function Index() {
  const [bgColor, setBgColor] = useState('')
  const [textColor, setTextColor] = useState('')
  const changeColor = () => {
      console.log('matchingTextColor',matchingTextColor)
    const bg = randomColor()
    setBgColor(bg)
    setTextColor(matchingTextColor(bg))
  }

  useEffect(changeColor, [])

  return (
    <Page>
      <Text variant="h1" className="mb-6">
          Summer
      </Text>
      <Text className="mb-4">
        Hello xin chào tất cả các bạn, chào mừng các bạn đã đến với Channel của mình
      </Text>
      <List className="mb-4">
        <li>
          <Code>Tunglv27</Code> Đây là account làm việc của mình
        </li>
        <li>
          <Code>packages/ui</Code> is a package that exports the button you see
          below
        </li>
        <li>
          <Code>packages/utils</Code> is a package that exports a function that
          generates random colors. Click the button to see it in action
        </li>
      </List>
      {bgColor && textColor && (
        <>
          <Button
            style={{
              backgroundColor: bgColor,
              color: textColor,
              borderColor: textColor,
            }}
            onClick={changeColor}
          >
            Change Color
          </Button>
        </>
      )}
    </Page>
  )
}

Index.Layout = Layout
