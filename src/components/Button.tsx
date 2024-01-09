import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props & PropsWithChildren> = ({
  children,
  ...props
}) => (
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    {...props}
  >
    {children}
  </button>
)
