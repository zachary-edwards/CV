import React, { useState } from 'react'

export default function Phone(props) {
    const [phone, setPhone] = useState('')
    const [cursor, setCursor] = useState(0)
    const [charDeleted, setCharDeleted] = useState('')

    const isDelete = (event) => event.keyCode === 8

    const onKeyDown = (event) => {
        if (isDelete(event)) { 
            console.log('hel')
            console.log(event.target.value)
            setCharDeleted(event.target.value.substring(cursor-1, cursor))
        }
        if (charDeleted === '-')
            setCursor(cursor-1)
    }

    const onKeyUp = (event) => {
        let code = event.keyCode
        if (code === 8) {
            setCursor(cursor-1)
            event.target.setSelectionRange(cursor-1, cursor-1)
        }else { 
            setCursor(event.target.selectionStart)
        }
    }

    const onClick = (event) => {
        setCursor(event.target.selectionStart)
    }

    const handleChange = (event) => {
        event.preventDefault()
        let phone = event.target.value
        phone = phone.replace(/\D/g, '')
        let match = phone.match(/^(\d{3}|$)(\d{1,3}|$)(\d{1,4}|$)$/)
        console.log(match)
        if (match) 
            setPhone(`${match[1] && match[1]}${match[2] &&'-'+match[2]}${match[3] && '-'+match[3]}`)
        else setPhone(phone)
    }

    return (
        <input
            type="tel"
            value={phone}
            onChange={handleChange}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            onClick={onClick}
            maxLength={12}
        />
    )
}