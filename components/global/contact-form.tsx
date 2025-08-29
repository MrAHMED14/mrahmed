"use client"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.string().email(),
  msg: z.string().optional(),
})

interface ContactFormProps {}

export default function ContactForm({}: ContactFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      msg: "",
    },
  })

  async function onSubmit({}) {
    setIsLoading(true)
    toast.warning("This feature is under maintenance")
    setIsLoading(false)
  }

  return (
    <>
      <h1 className="pb-1 text-white/60">(*) Fields are required</h1>
      <main className="flex flex-col-reverse lg:flex-row items-start justify-between gap-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>
                      <span className="text-red-500">*</span>Your Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Name"
                        className="placeholder:text-white/60 border-white/10"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => {
                return (
                  <FormItem className="w-full">
                    <FormLabel>
                      <span className="text-red-500">*</span>Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        className="placeholder:text-white/60 border-white/10"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )
              }}
            />

            <FormField
              control={form.control}
              name="msg"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Additional information</FormLabel>
                    <Textarea
                      className="placeholder:text-white/60 ring-white/30 h-48 border-white/10"
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormItem>
                )
              }}
            />
            <Button
              disabled={isLoading}
              type="submit"
              className="disabled:cursor-not-allowed mt-5 mb-1 w-full bg-white text-black hover:bg-white/70"
            >
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  )
}
