import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<Props & PropsWithChildren> = ({
  children,
  ...props
}) => (
  <button
    type="button"
    className="text-white bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
    {...props}
  >
    {children}
  </button>
)
