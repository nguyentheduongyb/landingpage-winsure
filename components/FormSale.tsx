"use client"
import React from 'react'
import { Label, TextInput, Button, Radio } from 'flowbite-react';
import Image from 'next/image'
import { BsFillTelephoneFill } from "react-icons/bs"
const FormSale = () => {
        return (
                <div id="formsale" className="w-full bg-[#F6D655] flex flex-col items-center px-4">
                        <p className="mt-4 font-bold uppercase text-red-600 text-2xl">Mua với ưu đãi giảm 40%</p>
                        <form className="flex w-full flex-col gap-2 py-4 px-8 justify-center">
                                <div>
                                        <TextInput
                                                className="placeholder:italic"
                                                sizing="md"
                                                id="username"
                                                placeholder="Họ và Tên"
                                                required
                                        />
                                </div>
                                <div>

                                        <TextInput

                                                type="number"
                                                sizing="md"
                                                id="phone"
                                                placeholder="Số điện thoại"
                                                required
                                        />
                                </div>
                                <div>

                                        <TextInput

                                                type="text"
                                                sizing="md"
                                                id="address"
                                                placeholder="Địa chỉ"
                                                required
                                        />
                                </div>
                                <fieldset
                                        className="flex max-w-md flex-col gap-4"
                                        id="radio"
                                >
                                        <legend className="mb-4 text-xl font-bold">
                                                Chọn ưu đãi
                                        </legend>
                                        <div className="flex items-center gap-2">
                                                <Radio
                                                        defaultChecked
                                                        id="united-state"
                                                        name="countries"
                                                        value="3 tặng 1"
                                                />
                                                <Label className="text-lg" htmlFor="united-state">
                                                        Mua 3 tặng 1
                                                </Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <Radio
                                                        id="germany"
                                                        name="countries"
                                                        value="4 tặng 2"
                                                />
                                                <Label className="text-lg" htmlFor="germany">
                                                        Mua 4 tặng 2
                                                </Label>
                                        </div>

                                        <div className="flex items-center gap-2">
                                                <Radio
                                                        id="uk"
                                                        name="countries"
                                                        value="mua 5 tặng 3"
                                                />
                                                <Label className="text-lg" htmlFor="uk">
                                                        Mua 5 tặng 3
                                                </Label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                                <Radio
                                                        id="spain"
                                                        name="countries"
                                                        value="mua nhiều hơn 5"
                                                />
                                                <Label className="text-lg" htmlFor="spain">
                                                        Mua nhiều hơn ưu đãi nhiều hơn
                                                </Label>
                                        </div>
                                </fieldset>
                                <Button className="mt-4" color="failure" type="submit">
                                        <span className="font-bold text-lg uppercase">Đặt ngay</span>
                                </Button>
                        </form>
                </div>

        )
}

export default FormSale
