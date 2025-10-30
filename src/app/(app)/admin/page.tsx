"use client";

import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useUsers } from "@/hooks/useUsers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader } from "@/components/ui/loader";

export default function AdminPage() {
  useAdminAuth();
  const { users, loading } = useUsers();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Painel do Administrador</h1>
      <Card>
        <CardHeader>
          <CardTitle>Usuários Cadastrados</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <Loader className="h-8 w-8" />
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Módulos Concluídos</TableHead>
                  <TableHead>Lições de Confissão</TableHead>
                  <TableHead>Lições de Treino</TableHead>
                  <TableHead>Dias de Desafio</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.email}</TableCell>
                    <TableCell>{user.completedModules?.length || 0}</TableCell>
                    <TableCell>{user.completedConfessionLessons?.length || 0}</TableCell>
                    <TableCell>{user.completedWorkoutLessons?.length || 0}</TableCell>
                    <TableCell>{user.completedChallengeDays?.length || 0}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}