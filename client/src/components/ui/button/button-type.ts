export type ButtonPropsType = {
    children: React.ReactNode
    className?: string
    variant?: "primary" | "secondary"
} & React.ComponentProps<"button">