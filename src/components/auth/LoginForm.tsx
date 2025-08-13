"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signInWithEmailAndPassword } from "firebase/auth";

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

const formSchema = z.object({
  email: z.string().email({ message: "Por favor, insira um email válido." }),
  password: z.string().min(1, { message: "A senha é obrigatória." }),
});

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast({
        title: "Login bem-sucedido!",
        description: "Redirecionando para seus cursos.",
      });
      router.push("/courses");
    } catch (error: any) {
      console.error("Erro no login:", error);
      toast({
        variant: "destructive",
        title: "Erro no login",
        description: "Credenciais inválidas. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="font-headline text-3xl font-bold text-primary">Católicos de Verdade</h1>
        <p className="text-muted-foreground font-display">Bem-vindo(a) de volta!</p>
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
          <Button type="submit" className="w-full font-display" disabled={isLoading}>
            {isLoading ? <Loader className="mr-2 h-4 w-4 animate-spin" /> : null}
            Entrar
          </Button>
        </form>
      </Form>
      <div className="mt-6 text-center text-sm">
        <p className="text-muted-foreground">
          <Link href="/forgot-password" passHref>
            <span className="underline hover:text-primary cursor-pointer">Esqueceu sua senha?</span>
          </Link>
        </p>
        <p className="text-muted-foreground mt-2">
          Não tem uma conta?{" "}
          <Link href="/register" passHref>
            <span className="underline hover:text-primary cursor-pointer">Registre-se</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
