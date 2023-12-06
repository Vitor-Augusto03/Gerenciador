import { Form } from "react-router-dom"

const User = ({ onSubmit, type, placeholder, value, onChange }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        onSubmit({ name })
    }

    return (
        <input className="input-login"
            onSubmit={safeSubmit}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value} />
    )

}

export default User;