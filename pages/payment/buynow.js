/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const BuyNow = (props) => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [phoneNo, setPhoneNo] = useState();
    const [whatsappNo, setWhatsappNo] = useState();

    const handleChange = (e) => {
        if (e.target.name == 'email') {
            setEmail(e.target.value);
        } else if (e.target.name == 'phoneNo') {
            setPhoneNo(e.target.value);
            console.log(e.target.value)
        } else if (e.target.name == 'fullName') {
            setFullName(e.target.value);
        } else if (e.target.name == 'whatsappNo') {
            setWhatsappNo(e.target.value);
        }
    }

    const confirm = () => {
        console.log(fullName, email, phoneNo)
    }
    return (
        <>
            {/* <!-- component --> */}
            <div className='bg-[#001719] text-white'>
                <h1 className='text-3xl font-bold italic text-center p-4'>Buy Now</h1>
                <div class="p-12 mx-24 px-4 md:p-8">
                    <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                        <div class="text-gray-600">
                            <p class="font-medium text-xl py-2 text-white">Your Course : </p>
                            {props.courseCode == "training" && <img src="../courses_images/training_intern.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "java" && <img src="../courses_images/java.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "fullstack" && <img src="../courses_images/web_dev.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "datascience" && <img src="../courses_images/data_science.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "android" && <img src="../courses_images/android_app_dev.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "aiml" && <img src="../courses_images/aiml.png" className='rounded-xl h-56 md:h-72 w-full object-cover object-center' alt="" />}
                            {props.courseCode == "training" && <p className='font-bold text-xl text-white py-2 px-4'>Training and Internship 2023</p>}
                            {props.courseCode == "java" && <p className='font-bold text-xl text-white py-2 px-4'>Java with DSA</p>}
                            {props.courseCode == "fullstack" && <p className='font-bold text-xl text-white py-2 px-4'>Full Stack Web Development</p>}
                            {props.courseCode == "datascience" && <p className='font-bold text-xl text-white py-2 px-4'>Data Science</p>}
                            {props.courseCode == "android" && <p className='font-bold text-xl text-white py-2 px-4'>Android App Development</p>}
                            {props.courseCode == "aiml" && <p className='font-bold text-xl text-white py-2 px-4'>AI / ML</p>}

                            {props.courseCode == "training" && <p className='text-sm text-white px-4'>Training in Computer Science (CS) is an excellent way to gain skills and knowledge in the field of computing. With the rapid growth of technology, training in CS has become increasingly popular and valuable.</p>}
                            {props.courseCode == "java" && <p className='text-sm text-white px-4'>A Java programming course is an educational program that teaches students the fundamentals of the Java programming language.</p>}
                            {props.courseCode == "fullstack" && <p className='text-sm text-white px-4'>A full-stack web development course is an educational program that teaches students the skills needed to build web applications from start to finish.</p>}
                            {props.courseCode == "datascience" && <p className='text-sm text-white px-4'>These courses are designed to provide a comprehensive overview of the techniques and technologies used in Data Science, including statistical analysis, machine learning, and data visualization.</p>}
                            {props.courseCode == "android" && <p className='text-sm text-white px-4'>Android app development is a highly sought-after skill in todays job market, and taking an Android app development course can be an excellent way to learn this skill.</p>}
                            {props.courseCode == "aiml" && <p className='text-sm text-white px-4'>AI/ML are rapidly evolving fields that are changing the way we live and work. AI/ML courses provide students with the skills and knowledge needed to pursue a career in these exciting fields.</p>}
                            <div className='text-white font-bold text-2xl flex justify-between pt-1 pb-2 px-4'>
                                <h1>Price :</h1>
                                <div className='flex'>
                                    <h1 className='pr-4'>{props.courseCode == "training" && "₹799/-"}{props.courseCode == "datascience" && "₹1,999/-"}{props.courseCode == "aiml" && "₹1,999/-"}{props.courseCode == "android" && "₹2,499/-"}{props.courseCode == "fullstack" && "₹1,499/-"}{props.courseCode == "java" && "₹999/-"}</h1>
                                    <span class="mb-0.5 text-red-500 line-through">{props.courseCode == "training" && "₹2,999/-"}{props.courseCode == "datascience" && "₹3,999/-"}{props.courseCode == "aiml" && "₹3,999/-"}{props.courseCode == "android" && "₹4,999/-"}{props.courseCode == "fullstack" && "₹2,499/-"}{props.courseCode == "java" && "₹1,999/-"}</span>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-2 px-48">
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div class="md:col-span-5 py-2">
                                    <label for="fullName">Full Name*</label>
                                    <input onChange={handleChange} type="text" name="fullName" id="fullName" class="text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" value={fullName} placeholder='Full Name' />
                                </div>

                                <div class="md:col-span-5 py-2">
                                    <label for="email">Email Address*</label>
                                    <input onChange={handleChange} value={email} type="text" name="email" id="email" class="text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" placeholder="email@domain.com" />
                                </div>

                                <div class="md:col-span-3 py-2">
                                    <label for="phoneNo">Phone No*</label>
                                    <input onChange={handleChange} value={phoneNo} type="text" name="phoneNo" id="phoneNo" class="text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" placeholder="Phone Number" />
                                </div>

                                <div class="md:col-span-2 py-2">
                                    <label for="whatsappNo">Whatsapp No*</label>
                                    <input onChange={handleChange} type="text" name="whatsappNo" id="whatsappNo" class="text-black outline-none ring-[#a2cc4c] transition duration-100 focus:ring rounded border bg-gray-50 h-10 mt-2 px-4 w-full" value={whatsappNo} placeholder="Whatsapp Number" />
                                </div>

                            </div>
                            <div className='bg-[#001719] flex text-white py-4'>
                                {props.courseCode == "aiml" && <img className='h-56' src="../qrs/aiml.jpg" alt="" />}
                                {props.courseCode == "fullstack" && <img className='h-56' src="../qrs/fullstack.jpg" alt="" />}
                                {props.courseCode == "android" && <img className='h-56' src="../qrs/android.jpg" alt="" />}
                                {props.courseCode == "java" && <img className='h-56' src="../qrs/java.jpg" alt="" />}
                                {props.courseCode == "datascience" && <img className='h-56' src="../qrs/datascience.jpg" alt="" />}
                                {props.courseCode == "training" && <img className='h-56' src="../qrs/training.jpg" alt="" />}
                                <div>
                                    <h1 className='text-3xl p-4'>Scan & Pay</h1>
                                    <p className='px-4'>Scan and Pay is a secure payment method as it uses encryption to protect the customer's payment information. The customer confirms the payment amount on their mobile app and authorizes the payment.</p>
                                </div>
                            </div>
                            <div class="md:col-span-5 py-2">
                                    <label for="email">Share your Screenshot of Payment : </label>
                                    <input type="file" className='px-2'/>
                                </div>
                            <div class="md:col-span-5 text-right">
                                <div class="inline-flex items-end">
                                    <button class="bg-[#a2cc4c] hover:bg-[#7b9c3a] text-white font-bold py-2 px-4 rounded" onClick={confirm}>Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BuyNow