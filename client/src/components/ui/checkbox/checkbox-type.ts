export type CheckboxProps = {
    label?: string
    onChange: (params?: any) => void
    boxClassName?: string
    checked?: boolean
    value?: string | number
    variant: "default" | "bordered"
}