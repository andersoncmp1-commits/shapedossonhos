"use client";

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert, Loader } from "lucide-react";
import { AdminUserEditor } from './AdminUserEditor';
import { Header } from '@/components/layout/Header';
import { useToast } from '@/hooks/use-toast';
import type { AppUser } from "@/lib/types";

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<AppUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUsers() {
      if (authLoading) {
        return;
      }
      
      if (!user) {
        setLoading(false);
        setIsAdmin(false);
        return;
      }

      setLoading(true);
      setError(null);
      try {
        const idToken = await user.getIdToken();
        const response = await fetch('/api/users', {
          headers: {
            'Authorization': `Bearer ${idToken}`,
          },
        });

        if (response.ok) {
            const data = await response.json();
            setUsers(data.users);
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
            const body = await response.text();
            console.error("Failed to fetch users. Status:", response.status, body);
            setError(`Status ${response.status}: ${body}`);
             try {
                const errorData = JSON.parse(body);
                console.error("Error payload:", errorData);
            } catch {
                console.error("Could not parse error response body.");
            }
        }
      } catch (error) {
        setIsAdmin(false);
        console.error("Error fetching users:", error);
        setError("Não foi possível carregar a lista de usuários.");
        toast({
          variant: "destructive",
          title: "Erro ao buscar usuários",
          description: "Não foi possível carregar a lista de usuários.",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [user, authLoading, toast]);


  const content = () => {
    if (authLoading || loading) {
        return (
            <div className="flex items-center justify-center h-24">
                <Loader className="h-8 w-8 animate-spin" />
            </div>
        );
    }
    
    if (!isAdmin) {
       return (
        <Alert variant="destructive">
            <ShieldAlert className="h-4 w-4" />
            <AlertTitle>Acesso Negado</AlertTitle>
            <AlertDescription>
                Você não tem permissão para visualizar esta página. Se você acredita que isso é um erro, por favor, entre em contato com o suporte.
                {error && <pre className="mt-2 whitespace-pre-wrap text-xs bg-muted p-2 rounded">Detalhes: {error}</pre>}
            </AlertDescription>
        </Alert>
       )
    }

    return (
        <Card>
        <CardHeader>
          <CardTitle>Usuários</CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Dias de Desafio</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>{user.role ?? 'user'}</TableCell>
                      <TableCell>{user.completedChallengeDays?.length || 0}</TableCell>
                      <TableCell className="text-right">
                        <AdminUserEditor user={user} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center h-24">
                      Nenhum usuário encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Painel do Administrador</h1>
          {content()}
        </div>
      </main>
    </div>
  );
}
