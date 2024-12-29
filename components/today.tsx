import Image from "next/image";
import {descriptionImage} from '@/helpers/formatData'

interface Props {
  cityName: string;
  cityTime: number;
  temp: number;
  description: string
}

export default function Today({cityName, cityTime, temp, description}:Props) {
  return (
    <div className="p-3 rounded-[20px] shadow-lg md:col-span-5 lg:col-span-4">
      <div className="flex items-center mb-8">
        <div>
          <p className="text-8xl font-medium text-main">{temp}°</p>
          <p className="text-4xl text-black">Сегодня</p>
        </div>
        <Image 
        src={descriptionImage(description)} 
        alt="Description Image" 
        width={120} 
        height={120} 
        priority={false} 
        className="w-24 h-24"
        />
      </div>
      <div className="space-y-4 text-2xl text-gray-400">
        <p>Время: {cityTime}</p>
        <p>Город: {cityName}</p>
      </div>
    </div>
  )
}