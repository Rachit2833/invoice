import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) {
    console.error('Failed to parse saved invoice data')
  }

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
    <div className="app">
      <h1 className="center fs-30">React Invoice Generator</h1>

        <button
          aria-label="Made for Digital Heros"
          title="Made for Digital Heros"
          onClick={() => window.open("https://digitalheros.in", "_blank")}
          className=" center inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/20 active:translate-y-0"
        >
          🚀 Made for Digital Heros
        </button>



      <InvoicePage data={data} onChange={onInvoiceUpdated} />

    </div>
  )
}

export default App