"use server"

import {Resend} from "resend"
import ContactEmail from "./contact-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!message || typeof(message)!="string"){
        return{
            error: "invalid message"
        } 
    }

    if(!senderEmail || typeof(senderEmail)!="string"){
        return{
            error: "invalid sender Email"
        } 
    }

    await resend.emails.send({
        from: "Portfolio website email <onboarding@resend.dev>",
        to: "spider.wojciech@gmail.com",
        subject: "message from the contact form",
        reply_to: senderEmail as string,
        //text: message as string,
        react: React.createElement(ContactEmail, {message: message as string, senderEmail: senderEmail as string})
    })
}