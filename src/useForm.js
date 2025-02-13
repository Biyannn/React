import { useState } from "react"

export const useForm = () => {
    const [text, setText] = useState('')

    const reset = () => {
        setText('')
    }
    return {
        text,
        setText,
        reset
    }
}

