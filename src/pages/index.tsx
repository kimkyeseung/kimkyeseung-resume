import { Inter } from 'next/font/google'
import { Aside, Contents } from '@/components'
import { useReactToPrint } from 'react-to-print'
import { useEffect, useRef } from 'react'
import { DOCUMENT_TITLE } from '@/constants'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

const apiUrl: string = process.env.NEXT_PUBLIC_API_URL as string

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: DOCUMENT_TITLE,
    removeAfterPrint: true,
  })

  useEffect(() => {
    async function fetchData() {
      console.log(`${apiUrl}/test`)
      try {
        const data = await axios.get(`${apiUrl}/test`)
        // const data = await fetch(`${apiUrl}/test`, {
        //   credentials: 'omit',
        // })
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

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
