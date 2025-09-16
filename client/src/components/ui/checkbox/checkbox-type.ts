import { ComponentProps } from "react"

export type CheckboxProps = {
    label?: string
    onChange?: (params?: any) => void
    boxClassName?: string
    checked?: boolean
    value?: string | number
    name: string
    inputClassNames?: string
    labelClassNames?: string
    checkboxClassNames?: string
} & ComponentProps<"input">