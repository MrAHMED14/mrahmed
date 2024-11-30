import ContactForm from "../global/contact-form"

interface ContactSectionProps {}

export default function ContactSection({}: ContactSectionProps) {
  return (
    <div className="mb-60 w-[90%] sm:w-[70%] mx-4 h-96">
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-2" id="contact">
        CONTACT ME
      </h1>
      <div className="bg-white/10 rounded-sm mb-60 w-full">
        <div className="mx-3 md:mx-10 p-5">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
