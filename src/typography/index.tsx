import classNames from 'classnames'

export const CompanyName = ({ className, ...props }: any) => (
  <h5
    className={classNames(['text-xl', 'text-gray-700', 'font-bold', className])}
    {...props}
  />
)

export const ProjectTitle = ({ className, ...props }: any) => (
  <h6 {...props} className={classNames(['text-lg', 'font-bold', className])} />
)

export const Url = ({ className, ...props }: any) => (
  <span
    {...props}
    className={classNames(['text-sm', 'text-indigo-400', className])}
  />
)

export const Caption = ({ className, ...props }: any) => (
  <span
    {...props}
    className={classNames([
      'text-sm',
      'text-gray-500',
      'font-normal',
      className,
    ])}
  />
)
