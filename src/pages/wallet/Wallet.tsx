import { FaArrowLeft, FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import coin from "../../assets/icons/coin.png"
import { useNavigate } from "react-router-dom"
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"
import { transactions } from "../../utils/DummyData"
import { useState } from "react"
import { BsEye, BsEyeSlash } from "react-icons/bs"

const Wallet = () => {
  const navigate = useNavigate()
  const [amountsHidden, setAmountsHidden] = useState(true);
  return (
    <section className="w-full h-[89vh] md:px-10 px-4 py-3 md:flex md:gap-10">
      <section className="h-full w-full overflow-y-scroll lg:px-20 text-swhite">
        <section className="p-4 lg:p-5 w-full border-0">
          <section className="mb-10">
            <section className='mb-5 flex items-center gap-5'>
              <section className="cursor-pointer text-white">
                <FaArrowLeft onClick={() => navigate(-1)} />
              </section>
              <section className='text-left py-4'>
                <h2 className='text-2xl tracking-wide text-swhite font-bold'>Wallet</h2>
              </section>
            </section>
            <section className="mb-4 w-full flex gap-3 justify-center">
              <section className="w-3/5 text-white linear-gradient p-3 md:p-5 rounded-md">
                <section className="text-sm mb-5 md:text-base flex gap-2 items-center">Wallet Balance
                  {amountsHidden ? (
                    <BsEye
                      className="cursor-pointer text-xl"
                      onClick={() => setAmountsHidden(!amountsHidden)}
                    />
                  ) : (
                    <BsEyeSlash
                      className="cursor-pointer"
                      onClick={() => setAmountsHidden(!amountsHidden)}
                    />
                  )}</section>
                <section className="flex mb-5 justify-between items-center">
                  <section className="flex justify-between w-full bg-[#]">
                    <h2 className="text-lg md:text-2xl flex justify-between items-center font-bold gap-2">
                      {amountsHidden ? "****" : "₦ 5,000.00"}{" "}
                    </h2>
                  </section>
                </section>
                <hr className="bg-swhite2 mb-3" />
              </section>
              <section className="w-2/5 text-white linear-gradient p-3 md:p-5 rounded-md">
                <section className="text-sm mb-5 md:text-base">Coin Balance</section>
                <section className="flex mb-5 justify-between items-center">
                  <section className="flex items-center gap-1 w-full bg-[#]">
                    <img className="w-8 h-8" src={coin} alt={coin} />
                    <h2 className="text-lg md:text-2xl flex items-center font-bold gap-2">
                      {amountsHidden ? "****" : "1,000"}{" "}
                    </h2>
                  </section>
                </section>
                <hr className="bg-swhite2 mb-3" />
              </section>
            </section>
          </section>
          <section className="w-full">
            <section className="mb-4 flex justify-between items-center">
              <h5 className="text-swhite text-sm font-medium mb-2">Transaction History</h5>

              <span onClick={() => (navigate("/wallet/history"))} className="py-3 cursor-pointer text-[13px] text-swhite2">See more</span>
            </section>
            <div className="flex text-swhite2 flex-col gap-5">
              {transactions.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <div className="flex gap-2">
                    <div
                      className={`${item.type === "incoming" ? "text-green-500" : "text-red-500"
                        } bg-bgray flex justify-center px-4 py-3 rounded-md`}
                    >
                      {item.type === "incoming" ? (
                        <FaArrowDownLong />
                      ) : (
                        <FaArrowUpLong />
                      )}
                    </div>
                    <div className="flex flex-col text-left">
                      <h4 className="text-sm md:text-base">{item.text}</h4>
                      <span className="text-xs md:text-sm">{item.time}</span>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`${item.type === "incoming" ? "text-green-500" : "text-red-500"
                        } text-base md:text-lg flex items-center gap-2`}
                    >
                      {item.type === "incoming" ? (
                        <FaPlusCircle />
                      ) : (
                        <FaMinusCircle />
                      )}

                      {amountsHidden ? "****" : item.amount}

                      <img className="w-5 h-5" src={coin} alt={coin} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Wallet