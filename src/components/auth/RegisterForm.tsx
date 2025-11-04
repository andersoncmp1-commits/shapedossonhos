
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

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
import { errorEmitter } from "@/lib/error-emitter";
import { FirestorePermissionError } from "@/lib/errors";

// Removida a validação com Zod para simplificar e corrigir o build
// A validação de confirmação de senha será feita manualmente

export function RegisterForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { auth, db } = getFirebase();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: any) {
    if (values.password !== values.confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "As senhas não coincidem.",
      });
      return;
    }
    if (values.password.length < 6) {
      form.setError("password", {
        type: "manual",
        message: "A senha deve ter no mínimo 6 caracteres.",
      });
      return;
    }


    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      if (user) {
        // Cria o documento do usuário no Firestore
        const userDocRef = doc(db, "users", user.uid);

        // Atribui a role 'admin' se o email for o especificado, senão 'user'
        const userRole = values.email === 'andersoncmp1@gmail.com' ? 'admin' : 'user';

        const userData = {
          email: user.email,
          role: userRole,
          completedModules: [],
          completedConfessionLessons: [],
          completedWorkoutLessons: [],
          completedChallengeDays: [],
        };

        await setDoc(userDocRef, userData)
          .catch(serverError => {
            const permissionError = new FirestorePermissionError({
              path: userDocRef.path,
              operation: 'create',
              requestResourceData: userData,
            });
            errorEmitter.emit('permission-error', permissionError);
            // Lançar o erro novamente para que ele possa ser capturado pelo bloco catch principal se necessário
            throw permissionError;
          });
      }

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
      } else if (error instanceof FirestorePermissionError) {
        description = "Não foi possível salvar os dados do usuário. Contacte o suporte."
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
                  <Input placeholder="seu@email.com" {...field} type="email" required />
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
                  <Input type="password" placeholder="••••••••" {...field} required />
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
                  <Input type="password" placeholder="••••••••" {...field} required />
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
