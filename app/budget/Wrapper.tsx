"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form as FormComp,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SectionContainer from "@/components/SectionContainer";
import AnimateElement from "@/components/AnimateElement";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
const formSchema = z.object({
  full_name: z.string().min(2, {
    message: "Full name must have at least 2 characters",
  }),
  email: z.string().email(),
  number: z.string(),
  company_name: z.string(),
  message: z.string(),
  industry: z.string(),
});

export type Costumer = z.infer<typeof formSchema>;
export default function Wrapper() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Formulário enviada");
    form.reset();
  }
  return (
    <SectionContainer className="space-y-14" id="form">
      <AnimateElement className="flex flex-col gap-4 text-center">
        <span className="font-bold text-neutral-600 ">ENTRE EM CONTACTO</span>
        <span className="font-bold  text-5xl">PREENCHA O FORMULÁRIO</span>
      </AnimateElement>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-12">
        <FormComp {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5   ">
            <FormField
              control={form.control}
              name="full_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Jhon Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="jhondoe@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Número</FormLabel>
                  <FormControl>
                    <Input placeholder="+123456789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dê-nos mais informações</FormLabel>
                  <FormControl>
                   <Textarea {...field  } className="resize-none" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Local para remodelar</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="cozinha">Cozinha</SelectItem>
                      <SelectItem value="sala">Sala</SelectItem>
                      <SelectItem value="quarto">Quarto</SelectItem>
                      <SelectItem value="casa_de_banho">
                        Casa de banho
                      </SelectItem>
                      <SelectItem value="outros">Outros/Mais de um</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg">
              Enviar
            </Button>
          </form>
        </FormComp>
        <div className="relative w-full h-[400px]">

        <Image fill className="object-cover" src="/form/1.jpg" alt="Image" />
        </div>
      </div>
    </SectionContainer>
  );
}
