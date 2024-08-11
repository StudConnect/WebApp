import { FaArrowLeft, FaMinusCircle, FaPlusCircle } from "react-icons/fa"
import coin from "../../assets/icons/coin.png"
import { useNavigate } from "react-router-dom"
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"
import { transactions } from "../../utils/DummyData"

const History = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full h-[89vh] md:px-10 px-4 py-3 md:flex md:gap-10">
      <section className="h-full w-full overflow-y-scroll lg:px-20 text-swhite">
        <section className="p-4 lg:p-5 w-full border-0">
          <section className="mb-5">
            <section className='mb-5 flex items-center gap-5'>
              <section className="cursor-pointer text-white">
                <FaArrowLeft onClick={() => navigate(-1)} />
              </section>
              <section className='text-left py-4'>
                <h2 className='text-2xl tracking-wide text-swhite font-bold'>Wallet History</h2>
              </section>
            </section>
          </section>
          <section className="w-full">
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

                      {item.amount}
                      
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

export default History