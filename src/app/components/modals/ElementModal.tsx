"use client"

import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { elementModalFunc } from "@/app/redux/modalSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { categories } from "../navbar/Categories";
import CategorySelect from "../listings/CategorySelect";
import CountrySelect from "../listings/CountrySelect";
import CounterSelect from "../listings/CounterSelect";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";


const LoginModal = () => {
    const [imgsSrc, setImgsSrc] = useState([])
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            imageSrc: '',
            category: '',
            roomCount: 1,
            location: null
        }
    })
    const { elementModal } = useAppSelector((state) => state.modal)

    const dispatch = useAppDispatch()

    const router = useRouter()

    const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
        console.log(data)
        axios.post('/api/listings', data)
        .then(() => {
            toast.success('ekleme işlemi basarılı')
            router.refresh();
            reset()
            dispatch(elementModalFunc())
        })
        .catch((err) => {
         toast.error('ekleme işlemi basarısız!!')
            console.log(err, "err")
        })
    }

    const customSetValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }
    const category = watch('category');
    const roomCount = watch('roomCount');
    const imageSrc = watch('imageSrc');
    const location = watch('location');

    const imageSelectFunc = (e: any) => {
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs):any => [...imgs, reader.result] )
                return customSetValue('imageSrc',reader.result)
            }
            reader.onerror = () => {
                console.log(reader.error)
            }
        }
    }



    const bodyElement = (
     <>
        <div className="mb-5">
            <h2 className="text-xl text-center my-2">Bir Kategori Seçiniz</h2>
            <div className="flex flex-row items-center gap-2 w-full">
                {
                    categories.map((cat, i) => (
                        <CategorySelect
                            key={i}
                            name={cat.name}
                            icon={cat.icon}
                            onClick={(category) => { customSetValue("category", category) }}
                            selected={category == cat.name}
                        />
                    ))
                }
            </div>

        </div>
        <div className="mb-5">
                <CountrySelect value={location} onChange={(value)=> {customSetValue("location", value)}}/>
        </div>
        <div className="mb-5">
            <CounterSelect
                title="Oda Sayısı"
                description = "Oda Sayısı Miktarı(Açıklama)"
                value={roomCount}
                onChange = {(value) => {customSetValue('roomCount', value)} }
            />
        </div>
        <input className="mb-4" multiple type="file" name="file" onChange={val => imageSelectFunc(val)} />
       <div className="mb-5">
        <Image className="border-2 border-gray-500 rounded-md overflow-hidden"
          src={imageSrc || "https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"}
          alt=""
          width={120}
          height={120}
        />
       </div>
     </>
    )


    return (
        <div>
            <Modal bodyElement={bodyElement} isOpen={elementModal} onSubmit={handleSubmit(onSubmit)} onClose={() => { dispatch(elementModalFunc()) }} btnLabel="Oluştur" title="KONAKLAMA OLUŞTUR" />
        </div>
    )
}

export default LoginModal