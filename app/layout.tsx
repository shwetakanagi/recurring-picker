
import './globals.css'
import { RecurrenceProvider } from '../context/RecurrenceContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 font-sans antialiased min-h-screen">
        <RecurrenceProvider>
          <main className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
            {children}
          </main>
        </RecurrenceProvider>
      </body>
    </html>
  )
}
