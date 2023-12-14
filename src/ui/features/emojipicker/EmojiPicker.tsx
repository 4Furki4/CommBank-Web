import { BaseEmoji, Picker } from 'emoji-mart'
import React from 'react'
import { selectMode } from '../../../store/themeSlice'
import { useAppSelector } from '../../../store/hooks'
type Props = { onClick: (emoji: BaseEmoji, event: React.MouseEvent) => void }

export default function EmojiPicker(props: Props) {
  const theme = useAppSelector(selectMode)
  return (
    <Picker
      theme={theme}
      showSkinTones={false}
      showPreview={false}
      onClick={props.onClick}
      color="primary"
    />
  )
}
