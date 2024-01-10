import { Inter } from 'next/font/google'
import { Aside, Contents } from '@/components'
import { useReactToPrint } from 'react-to-print'
import { useCallback, useRef } from 'react'
import { DOCUMENT_TITLE } from '@/constants'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  const handleAfterPrint = useCallback(() => {
    console.log('`onAfterPrint` called') // tslint:disable-line no-console
  }, [])

  const handleBeforePrint = useCallback(() => {
    console.log('`onBeforePrint` called') // tslint:disable-line no-console
  }, [])

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: DOCUMENT_TITLE,
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true,
  })
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-0 md:p-24 ${inter.className} bg-gray-100 w-screen`}
    >
      <Contents ref={ref} />
      <div className="hidden md:block fixed right-6 top-6">
        <Aside onPrintButtonClick={handlePrint} />
      </div>
    </main>
  )
}
