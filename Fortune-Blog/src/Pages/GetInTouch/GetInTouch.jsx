import React from "react";
import "./GetInTouch.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import insta from "../../assets/insta.png";
import linked from "../../assets/linked.png";



const schema = yup
.object({
    email: yup.string().required('Email is required').matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/, 'Email address is not valid')
})
.required();

const GetInTouch = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
      });
const onSubmit = (data, e) =>{ 
    e.target[0].value = ''; //for name
    e.target[1].value = ''; //for email
    e.target[2].value = ''; //for phone
    e.target[3].value = ''; //for company
    e.target[4].value = ''; //for message
    alert('Message sent successfully');
    console.log(data)};

  return (
    <div className="fadeIn xl:absolute xl:left-[28rem] xl:top-[12rem] absolute top-[4rem] xl:p-0 p-2 image">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="pb-[2rem] xl:text-[14px] text-[20px] h2">What can i write for you?</h2>
                <div className="xl:flex xl:gap-[2rem] xl:pb-[1rem]">
                    <div className="pb-[2rem]">
                        <h2 className="text-[8px] pb-[.5rem]">NAME</h2>
                        <input type="text" className="input xl:w-[15rem] w-[23rem]" />
                    </div>
                    <div className="pb-[2rem]">
                        <h2 className="text-[8px] pb-[.5rem]">EMAIL *</h2>
                        <input type="text" className="input xl:w-[15rem] w-[23rem]" 
                        {...register('email')} />
                        <p className="text-[12px] pt-1">{errors.email?.message}</p>
                    </div>
                </div>

                <div className="xl:flex gap-[2rem] pb-[1rem]">
                    <div className="pb-[2rem]">
                        <h2 className="text-[8px] pb-[.5rem]">PHONE</h2>
                        <input type="text" className="input  xl:w-[15rem] w-[23rem]" 
                      />
                    </div>
                    <div>
                        <h2 className="text-[8px] pb-[.5rem]">COMPANY</h2>
                        <input type="text" className="input xl:w-[15rem] w-[23rem]" />
                    </div>
                </div>
                <div>
                    <h2 className="text-[8px] pb-[.5rem]">MESSAGE</h2>
                    <input type="text" className="input-message xl:w-[30rem] w-[23rem] xl:pt-0 pt-[2rem]" />
                </div>
            <input type="submit" value="Send" className="submit xl:ml-[12rem] ml-[8rem]"></input>
        </form>

        <footer className="border-gray-900 border-t-[1px] absolute bottom-[-12rem] xl:w-[32rem] w-[23.5rem]">
      <div className="flex justify-between">
        <h2 className="font-thin text-[14px]"> &#169; Designed by onlyeugene</h2>
        <div className="flex gap-3">
            <img src={linked} alt="" className="w-[1.5rem]"/>
            <div>
                <img src={insta} alt="" className="w-[1.5rem]"/>
            </div>
        </div>
      </div>
      </footer>
    </div>
  );
};

export default GetInTouch;
