import { useCryptoStore } from "../store"
import { currencies } from "../data"
import { ChangeEvent, useState } from "react"
import { Pair } from "../types"

export default function CriptoSearchForm() {

    const cryptocurrencies = useCryptoStore((state) => state.cryptocurrencies)
    const [pair, setPair] = useState<Pair>({
        currency: "",
        cryptocurrency: ""
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }

  return (
    <form className='form'>
        <div className="field">
            <label htmlFor="currency">Moneda</label>
            <select 
                name="currency" 
                id="currency"
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>

        <div className="field">
            <label htmlFor="cryptocurrency">Criptomoneda</label>
            <select 
                name="cryptocurrency" 
                id="cryptocurrency"
                onChange={handleChange}
            >
                <option value="">-- Seleccione --</option>
                {cryptocurrencies.map( crypto => (
                    <option 
                        key={crypto.CoinInfo.Name} 
                        value={crypto.CoinInfo.Name}
                    >
                        {crypto.CoinInfo.FullName}
                    </option>
                ))}
            </select>
        </div>

        <input type="submit" value="cotizar"/>
    </form>
  )
}
