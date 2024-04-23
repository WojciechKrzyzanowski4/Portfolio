import React from 'react'

import {Html,  Tailwind, Body, Head, Heading, Hr, Container, Preview, Section, Text} from "@react-email/components"

type ContactFormEmailProps = {
    message: string
    senderEmail: string
}

export default function ContactEmail({message, senderEmail}: ContactFormEmailProps) {
  return (
    <Html>
        <Preview>New message from my portfolio</Preview>
        <Tailwind>
            <Body>
                <Container>
                    <Section>
                        <Heading>You recieved the following message from the contact form</Heading>
                        <Text>{message}</Text>
                        <Hr/>
                        <Text>The senders email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>

    </Html>
  )
}
