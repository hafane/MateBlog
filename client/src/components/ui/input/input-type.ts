import { ComponentProps } from "react"
import { MaterialIconsType } from "../icons/material-icons-type"

export interface InputProps extends ComponentProps<"input"> {
    Icon?: MaterialIconsType
    InputClassName?: string
    IconClassName?: string
    labelText?: string
}