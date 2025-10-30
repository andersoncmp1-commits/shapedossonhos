
"use client";

import { useState } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { useUsers } from "@/hooks/useUsers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { AppUser } from "@/hooks/useUsers";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ShieldAlert } from "lucide-react";

export default function AdminPage() {
  const { isAdmin, loading: adminLoading } = useAdminAuth();
  const { users, loading: usersLoading, updateUser, searchUsers } = useUsers();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<AppUser | null>(null);
  const [editedUser, setEditedUser] = useState<Partial<AppUser>>({});
  const [searchEmail, setSearchEmail] = useState("");

  const openEditDialog = (user: AppUser) => {
    setSelectedUser(user);
    setEditedUser({ email: user.email, role: user.role });
    setIsEditDialogOpen(true);
  };

  const handleUpdateUser = async () => {
    if (selectedUser && editedUser) {
      await updateUser(selectedUser.id, editedUser);
      setIsEditDialogOpen(false);
      setSelectedUser(null);
    }
  };
  
  const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      if(searchEmail) {
          searchUsers(searchEmail);
      }
  }

  const loading = adminLoading || usersLoading;

  if (!adminLoading && !isAdmin) {
      return (
          <div className="max-w-4xl mx-auto">
                <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Painel do Administrador</h1>
                 <Alert variant="destructive">
                    <ShieldAlert className="h-4 w-4" />
                    <AlertTitle>Acesso Negado</AlertTitle>
                    <AlertDescription>
                        Você não tem permissão para visualizar esta página. Se você acredita que isso é um erro, por favor, entre em contato com o suporte.
                    </AlertDescription>
                </Alert>
          </div>
      )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-headline text-3xl font-bold tracking-tight mb-8">Painel do Administrador</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Buscar Usuário</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex gap-2">
            <Input 
              type="email"
              placeholder="Digite o email do usuário"
              value={searchEmail}
              onChange={(e) => setSearchEmail(e.target.value)}
            />
            <Button type="submit" disabled={loading}>
              {loading ? <Loader className="h-4 w-4" /> : "Buscar"}
            </Button>
          </form>
        </CardContent>
      </Card>

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
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(user)}>
                          Editar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center h-24">
                      Nenhum usuário encontrado.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {selectedUser && (
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar Usuário</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  value={editedUser.email || ""}
                  onChange={(e) => setEditedUser(prev => ({...prev, email: e.target.value}))}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                 <Select
                  value={editedUser.role || 'user'}
                  onValueChange={(value) => setEditedUser(prev => ({...prev, role: value as 'admin' | 'user'}))}
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Selecione uma role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancelar</Button>
              <Button onClick={handleUpdateUser}>Salvar Alterações</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
