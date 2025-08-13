"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader } from "@/components/ui/loader";

const formSchema = z
  .object({
    email: z.string().email({ message: "Por favor, insira um email válido." }),
    password: z.string().min(6, { message: "A senha deve ter no mínimo 6 caracteres." }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

export function RegisterForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: "Conta criada com sucesso!",
        description: "Você será redirecionado para a página de cursos.",
      });
      router.push("/courses");
    } catch (error: any) {
      console.error("Erro no registro:", error);
      let description = "Ocorreu um erro ao criar sua conta. Tente novamente.";
      if (error.code === 'auth/email-already-in-use') {
        description = "Este email já está em uso por outra conta.";
      }
      toast({
        variant: "destructive",
        title: "Erro no registro",
        description,
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-headline text-3xl font-bold text-primary">Criar Conta</h1>
        <p className="text-muted-foreground font-display">Junte-se à nossa comunidade.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-display">Email</FormLabel>
                <FormControl>
                  <Input placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-display">Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-display">Confirmar Senha</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full font-display" disabled={isLoading}>
            {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
            Criar minha conta
          </Button>
        </form>
      </Form>
      <div className="mt-6 text-center text-sm">
        <p className="text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href="/login" passHref>
            <span className="underline hover:text-primary cursor-pointer">Faça login</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
