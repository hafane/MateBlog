import { ComponentProps } from "react"
import { MaterialIconsType } from "../icons/material-icons-type"

export type TInputProps = {
    Icon?: MaterialIconsType
    InputClassName?: string
    IconClassName?: string
    labelText?: string
} & ComponentProps<"input">