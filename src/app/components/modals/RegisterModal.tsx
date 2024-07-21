"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { FcGoogle } from "react-icons/fc";
import Modal from "./Modal"
import Input from "../inputs/Input"
import SocialMediaIcon from "../buttons/SocialMediaIcon";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { loginModalFunc, registerModalFunc } from "@/app/redux/modalSlice";
import axios from "axios";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const RegisterModal = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data)

        try {
            const res = await axios.post("/api/register", data)
            console.log(res)
            dispatch(registerModalFunc())
            toast.success("Kayıt Olma İşlemi Başarılı!!")
        } catch (error) {
            console.log(error)
            toast.error("Bir Hata Oluştu Tekrar Deneyiniz!!")
            
        }
    }

    const {registerModal, } = useAppSelector((state) => state.modal)
    const dispatch = useAppDispatch()

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const redirectFunc = ()=>{
        dispatch(loginModalFunc())
        dispatch(registerModalFunc())
      }

    const bodyElement = (
        <div>
            <Input
                id="name"
                type="text"
                placeholder="Kullanıcı Adınız"
                labelTitle="Kullanıcı Adınız"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                type="email"
                placeholder="Emailiniz"
                labelTitle="Emailiniz"
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                placeholder="Şifreniz"
                labelTitle="Şifreniz"
                register={register}
                errors={errors}
                required
            />
        </div>
    )


    const footerElement = (
        <div className="flex flex-col items-center mt-3">
            <div>Ya da</div>
            <SocialMediaIcon
                icon={FcGoogle}
                btnTitle="Google ile Giriş"
                onSubmit={() => { signIn('google', { callbackUrl })}}
            />
         
            <div className="">
                <small>Zaten hesabınız var mı?</small>
                <a onClick={redirectFunc} className="cursor-pointer text-sm mx-1 text-black font-bold hover:border-b border-black transition-all">Giriş Yap</a>
            </div>
        </div>

    )

    return (
        <div>
            <Modal footerElement={footerElement} bodyElement={bodyElement} isOpen={registerModal} onSubmit={handleSubmit(onSubmit)} onClose={() => {dispatch(registerModalFunc()) }} btnLabel="Kayıt Ol" title="KAYIT OL" />
        </div>
    )
}

export default RegisterModal