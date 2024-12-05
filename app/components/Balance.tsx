import { Wallet } from "lucide-react"

export default function Balance({ money } : { money: string }) {
  return (
    <div className="flex space-x-4 items-center bg-white text-neutral-800 border-r-4 border-r-blue-600 p-4 shadow-md rounded-md">
      <Wallet size={48} />
      <div>
        <h3 className="text-lg">Balance</h3>
        <p className="text-xl font-bold">{money}</p>
      </div>
    </div>
  )
}
