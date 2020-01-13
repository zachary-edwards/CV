import React, { useState } from 'react'

export default function Phone(props) {
    const [phone, setPhone] = useState('')
    const [cursor, setCursor] = useState(0)
    const [wasDelete, setWasDelete] = useState(false)
    const isDelete = (event) => event.keyCode === 8

    const onKeyDown = (event) => {
        if (isDelete(event)) { 
            setWasDelete(true)
            setCursor(cursor-1)
            if (event.target.value.substring(cursor-1, cursor) === '-') {
                event.preventDefault()
                setCursor(cursor-1)
            }
        } else {
            setCursor(cursor+1)
            setWasDelete(false)
        }
    }

    const onKeyUp = (event) => {
        console.log(event.target.value)
        let code = event.keyCode
        if (code === 8) {
        } else if (event.target.value.substring(cursor-1, cursor) === '-') {
            setCursor(cursor+1)
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
        if (match) 
            setPhone(`${match[1] && match[1]}${match[2] &&'-'+match[2]}${match[3] && '-'+match[3]}`)
        else setPhone(phone)

        if (!wasDelete && event.target.value.substring(cursor, cursor+1) === '-') {
            console.log('was delete', wasDelete)
            setCursor(cursor+1)
            event.target.setSelectionRange(cursor, cursor)
        }
    }

    return (
        <input
            type="tel"
            value={phone}
            onKeyUp={onKeyUp}
            onKeyDown={onKeyDown}
            onChange={handleChange}
            onClick={onClick}
            maxLength={12}
        />
    )
}