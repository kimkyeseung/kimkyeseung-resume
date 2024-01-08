import classNames from 'classnames'

export const Title = ({ className, ...props }: any) => (
  <h1
    className={classNames(['text-4xl', 'font-semibold', className])}
    {...props}
  />
)

export const Subtitle = ({ className, ...props }: any) => (
  <h2 className={classNames(['text-3xl', className])} {...props} />
)

export const CompanyName = ({ className, ...props }: any) => (
  <h5
    className={classNames(['text-xl', 'text-gray-700', 'font-bold', className])}
    {...props}
  />
)

export const ProjectTitle = ({ className, ...props }: any) => (
  <h6 {...props} className={classNames(['text-lg', 'font-bold', className])} />
)

export const SectionTitle = ({ className, ...props }: any) => (
  <h3
    {...props}
    className={classNames([
      'text-base',
      'text-gray-600',
      'font-semibold',
      className,
    ])}
  />
)

export const Url = ({ className, ...props }: any) => (
  <span
    {...props}
    className={classNames(['text-sm', 'text-blue-400', className])}
  />
)

export const Caption = ({ className, ...props }: any) => (
  <span
    {...props}
    className={classNames(['text-sm', 'text-gray-500', className])}
  />
)
