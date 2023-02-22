import { useTheme } from '../hooks/useTheme'
import lightDarkMode from '../assets/light-dark-mode.svg'

//styles
import './ThemeSelector.css'

//colours to be chosen from 
const themeColors = ['#58249c', '#249c6b', '#b70233']


export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    //toggle light and dark mode 
    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

    console.log(mode)

    return (
        <div className='theme-selector'>
            <div className="mode-toggle">
                <img 
                    onClick={toggleMode}
                    src={lightDarkMode} 
                    alt="dark/light toggle icon"
                    style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                    />
            </div>
            <div className="theme-buttons">
                {themeColors.map(color => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{background: color}}
                    />
                ))}

            </div>
        </div>
    )
}
