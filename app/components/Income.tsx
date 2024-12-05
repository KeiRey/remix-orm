import { TrendingUp } from "lucide-react"

export default function Income({ money } : { money: string }) {
  return (
    <div className="flex space-x-4 items-center bg-white text-neutral-800 border-r-4 border-r-green-600 p-4 shadow-md rounded-md">
      <TrendingUp size={48} color="green" />
      <div>
        <h3 className="text-lg">Income</h3>
        <p className="text-xl font-bold">{money}</p>
      </div>
    </div>
  )
}
