"use client"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes';

export default function ThemeToggler() {
    const { setTheme, theme } = useTheme()
    return (
        <div className=' flex justify-center items-center'>
            {theme == "dark" ?
                (<button onClick={() => {
                    setTheme("light");
                }} className="  text-primary cursor-pointer"><Sun /></button>) :
                (<button onClick={() => {
                    setTheme("dark");
                }}
                    className="  text-primary cursor-pointer"><Moon /></button>)
            }
        </div>
    )
}
