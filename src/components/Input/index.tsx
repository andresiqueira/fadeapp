import { ChangeEvent, InputHTMLAttributes, useState } from "react"
import { containerStyle, inputStyle, labelStyle } from "./styles"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, value, name, ...rest }: InputProps) => {
  const [data, setData] = useState(value)
  const [animate, setAnimate] = useState(false)

  const onChange = (e:ChangeEvent<HTMLInputElement>) => {
    setData(e.currentTarget.value)
  }
  
  return (
    <div className={containerStyle}>
      <input
        {...rest}
        value={data}
        autoComplete="off"
        className={inputStyle}
        id={name}
        name={name}
        onFocus={
          () => setAnimate(true)
        }
        onBlur={
          () => data ? setAnimate(true) : setAnimate(false)
        }
        onChange={(e) => onChange(e)}
      />
      <label
        className={
          `
            ${labelStyle}
            ${animate || data ? "text-[0.75rem] top-[-0.215rem] leading-[0.875rem]" : "text-[1.125rem] leading-[1.3125rem] top-1"}
          `
        }
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  )
}
