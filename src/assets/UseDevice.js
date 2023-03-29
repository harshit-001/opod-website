import { useEffect, useState } from "react"
import { getMobileOperatingSystem } from "./utils"

export const useDevice = () =>{
    const [device, setDevice] = useState('')

 useEffect(() => {
    setDevice(getMobileOperatingSystem())
  },[device])

  return device;
}