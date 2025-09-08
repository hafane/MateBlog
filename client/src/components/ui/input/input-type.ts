import { ComponentProps } from "react"
import { MaterialIconsType } from "../icons/material-icons-type"

export type TInputProps = {
    Icon?: MaterialIconsType
    InputClassName?: string
    IconClassName?: string
    wrapperClassName?: string
    variant: "default" | "bordered"
    labelText?: string
} & ComponentProps<"input">