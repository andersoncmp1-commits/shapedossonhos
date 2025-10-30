
"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendPasswordResetEmail } from "firebase/auth";

import { getFirebase } from "@/lib/firebase";
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

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
});

export function ForgotPasswordForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { auth } = getFirebase();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await sendPasswordResetEmail(auth, values.email);
      toast({
        title: "Link enviado!",
        description: "Verifique sua caixa de entrada para as instruções.",
      });
      setIsSent(true);
    } catch (error: any) {
      console.error("Erro ao enviar email:", error);
      // Por segurança, não informamos ao usuário se o e-mail não existe.
      // A mensagem de sucesso é exibida de qualquer maneira.
      setIsSent(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-headline text-3xl font-bold text-primary">Recuperar Senha</h1>
        <p className="text-muted-foreground font-display">Enviaremos um link para o seu email.</p>
      </div>
      {isSent ? (
        <div className="text-center">
            <p className="text-foreground">Se o e-mail digitado estiver em nosso sistema, um link para redefinição de senha foi enviado. Verifique sua caixa de entrada e também a pasta de spam.</p>
             <Button asChild className="mt-6 font-display">
                <Link href="/login">Voltar para o Login</Link>
             </Button>
        </div>
      ) : (
        <>
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
              <Button type="submit" className="w-full font-display" disabled={isLoading}>
                {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
                Enviar link de recuperação
              </Button>
            </form>
          </Form>
          <div className="mt-6 text-center text-sm">
            <p className="text-muted-foreground">
              Lembrou sua senha?{" "}
              <Link href="/login" passHref>
                <span className="underline hover:text-primary cursor-pointer">Faça login</span>
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
