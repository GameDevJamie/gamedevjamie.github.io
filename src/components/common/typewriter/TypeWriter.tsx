import React, { useState, useEffect } from "react"
import { Wrapper } from "./styles"

type Props = {
  content: string
  //sequence: (string | number)[]
  speed: number
  delay: number //Wait in milliseconds before typing
}
const TypeWriter = ({ content, speed, delay }: Props) => {
  const [displayedContent, setDisplayedContent] = useState("")
  const [index, setIndex] = useState(-1)
  const [typing, setTyping] = useState(false)

  //Empty [] means will run once
  useEffect(() => {
    const timer = setTimeout(() => {
      clearTimeout(timer)
      setTyping(true)

      /*Create a new setInterval and store its id*/
      const animKey = setInterval(() => {
        setIndex(index => {
          /*This setState function will set the index
        to index+1 if there is more content otherwise
        it will destory this animation*/

          if (index >= content.length - 1) {
            clearInterval(animKey)
            setTyping(false)
            return index
          }
          return index + 1
        })
      }, speed) //Interval
    }, delay) //Timeout
  }, [])

  //Will run every time index changes, therefore updating the displayedContent
  useEffect(() => {
    if (!typing) setDisplayedContent("")
    else
      setDisplayedContent(displayedContent => displayedContent + content[index])
  }, [index])

  return <Wrapper typing={typing}>{displayedContent}</Wrapper>
}

TypeWriter.defaultProps = {
  content: "",
  speed: 1000,
}

export { TypeWriter }
