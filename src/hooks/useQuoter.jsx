import { useContext } from "react"
import QuoteContext from "../context/QuoteProvider"

const useQuoter = () => {
    return useContext(QuoteContext)
}

export default useQuoter