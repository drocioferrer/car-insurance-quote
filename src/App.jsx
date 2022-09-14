import AppInsurance from "./components/AppInsurance"
import { QuoteProvider } from "./context/QuoteProvider"

function App() {

  return (
    <QuoteProvider>
      <AppInsurance />
    </QuoteProvider>
  )
}

export default App
