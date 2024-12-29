import Image from "next/image"

interface Props {
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
  windSpeed: number
}

export default function Info({temp, feelsLike, pressure, humidity, windSpeed}:Props) {

  const infoArr = [
    {
      id: 1, title: 'Температура', val: `${temp}° - ощущается как ${feelsLike}°`, image: '/temp.svg'
    },
    {
      id: 2, title: 'Влажность', val: `${humidity}%`, image: '/downfall.svg'
    },
    {
      id: 3, title: 'Давление', val: `${pressure} мм ртутного столба`, image: '/pressure.svg'
    },
    {
      id: 4, title: 'Ветер', val: `${windSpeed} м/с`, image: '/wind.svg'
    },
  ]

  return (
    <div className="space-y-4 sm:space-y-9 lg:space-y-6 py-7 lg:py-10 sm:py-10 px-3 lg:px-7 shadow-lg rounded-[20px] max-h-72 md:col-start-6 md:col-end-13 lg:col-start-5">
      {infoArr.map(item => (  
        <div key={item.id} className="flex items-center gap-3 lg:gap-5">
          <div className="rounded-full w-5 h-5 lg:w-9 lg:h-9 bg-white shadow-md flex items-center justify-center">
            <Image src={item.image} width={25} height={25} alt="Info image" className="w-auto h-auto" />
          </div>
          <p className="text-xs lg:text-lg text-gray-400">{item.title}</p>
          <p className="text-xs lg:text-lg text-black">{item.val}</p>
        </div>
      ))}
    </div>
  )
}