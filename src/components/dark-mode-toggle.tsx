"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';
import React, { useState } from 'react'

export default function ThemeToggler() {
    const [isDarkmode, setIsDarkmode] = useState(true);
    const { setTheme } = useTheme()
    return (
        <div className=' flex justify-center items-center'>
            {isDarkmode ?
                (<button onClick={() => {
                    setTheme("light");
                    setIsDarkmode(!isDarkmode)
                }} className="  text-primary cursor-pointer"><Sun /></button>) :
                (<button onClick={() => {
                    setTheme("dark");
                    setIsDarkmode(!isDarkmode)
                }}
                    className="  text-primary cursor-pointer"><Moon /></button>)
            }
        </div>
    )
}
