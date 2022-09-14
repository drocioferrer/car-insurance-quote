import { useState, createContext } from 'react'
import { getYearDifference, calculateBrand, calculatePlan, formatMoney } from '../helpers'

const QuoteContext = createContext()

const QuoteProvider = ({ children }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)


    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const quoteInsurance = () => {
        
        // BASE
        let result = 2000

        // GET YEAR DIFFERENCE
        const difference = getYearDifference(data.year)

        // SUBTRACT 3% FOR EACH YEAR
        result -= ((difference * 3) * result) / 100

        // EUROPEAN 30%
        // AMERICAN 15%
        // ASIAN 5%

        result *= calculateBrand(data.brand)

        // BASIC 20%
        // COMPLETE 50%

        result *= calculatePlan(data.plan)

        // FORMAT MONEY
        result = formatMoney(result)

        setLoading(true)

        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 3000);
    }

    return (
        <QuoteContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoteInsurance,
                result,
                loading
            }}
        >
            {children}
        </QuoteContext.Provider>
    )
}

export {
    QuoteProvider
}

export default QuoteContext