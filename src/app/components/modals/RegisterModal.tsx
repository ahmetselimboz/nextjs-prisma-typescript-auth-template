"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Modal from "./Modal"

const RegisterModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    const bodyElement = (
        <div>
            aassdasd
        </div>
    )

    return (
        <div>
            <Modal bodyElement={bodyElement} isOpen onSubmit={() => { }} onClose={() => { }} btnLabel="Kayıt Ol" title="KAYIT OL" />
        </div>
    )
}

export default RegisterModal