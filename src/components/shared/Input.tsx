import { ComponentPropsWithoutRef } from 'react'
import styles from './Input.module.css'

export function Input(props: ComponentPropsWithoutRef<'input'> & { width?: any }) {
  return <input className={styles.base} {...props} style={{ width: props.width }} />
}
