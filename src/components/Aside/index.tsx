import { FC } from 'react'
import { useReactToPrint } from 'react-to-print'
import { PrinterIcon } from '@heroicons/react/24/solid'
import { Button } from '..'

interface Props {
  onPrintButtonClick: ReturnType<typeof useReactToPrint>
}

export const Aside: FC<Props> = ({ onPrintButtonClick }) => {
  return (
    <div>
      <Button onClick={onPrintButtonClick}>
        <div className="flex gap-2 items-center">
          <PrinterIcon className="h-5 w-5 text-white" />
          Print
        </div>
      </Button>
    </div>
  )
}
