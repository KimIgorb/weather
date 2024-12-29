import { IDaily } from "@/app/lib/definitions"
import Day from "./day"

export default function Week({ daysArr }: { daysArr: IDaily[] }) {

  const week = daysArr.slice(0, 7)

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 xl:gap-7">
      {week.map((day, i) => (
        <Day key={i} day={day} i={i} />
      ))}
    </div>
  )
}