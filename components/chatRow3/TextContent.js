import React from 'react';
import { Text } from 'react-native';

const TextContent = ({content, style}) => {
  if(content == null)return;
  if(typeof content === "string"){
    return (
      <Text style={style}>
            {content}
    </Text>
    )
  } 
  return (
    <Text style={style}>
            {JSON.stringify(content)}
    </Text>
  )
}

export default TextContent;