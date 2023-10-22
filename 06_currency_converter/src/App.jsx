import { useState } from 'react'
import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount,setAmount] = useState(0)
  const [From,setFrom] = useState("inr")
  const [to,setTo] = useState("usd")
  const [convertedAmount,setConvertedAmont] = useState(0)


  const currencyInfo = useCurrencyInfo(From)

  let options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(From)
    setConvertedAmont(amount)
    setAmount(convertedAmount)
  }
  
  const convert = ()=>{
    setConvertedAmont(amount * currencyInfo[to])
  }
  
  
  
  let BackgroundImage = "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
<div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('${BackgroundImage}')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                }}
            >
                <div className="w-full mb-1">
                    <InputBox
                        label="From"
                        amount = {amount}
                        currencyOptions = {options}
                        onCurrencyChange = {(currency)=> setAmount(currency)}
                        selectCurrency = {From}
                        onAmountChange = {(amount)=>{setAmount(amount)}}
                        
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                <InputBox
                        label="To"
                        amount = {convertedAmount}
                        currencyOptions = {options}
                        onCurrencyChange = {(currency)=> setTo(currency)}
                        selectCurrency = {From} 
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {From.toUpperCase()} to {to.toUpperCase()}
                  </button>
            </form>
        </div>
    </div>
</div>
);
}

export default App
