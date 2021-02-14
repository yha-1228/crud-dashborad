import { css } from '@emotion/css'
import React from 'react'

export default function Main({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css({
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: 'var(--color-gray-50)',
      })}
    >
      <div className={css({ width: 'calc(100vw - 240px)', height: '100vh', overflowY: 'auto' })}>
        {children}
      </div>
    </div>
  )
}
