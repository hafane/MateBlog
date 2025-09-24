import { ComponentProps } from "react"

export type TPasswordInputProps = {
    InputClassName?: string
    showPassword?: boolean
    wrapperClassName?: string
    variant: "default" | "bordered"
    labelText?: string
} & ComponentProps<"input">