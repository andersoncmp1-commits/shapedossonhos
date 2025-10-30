
"use client";

import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { getFirebase } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { AppUser } from "@/hooks/useUsers";
import { FirestorePermissionError } from "@/lib/errors";
import { errorEmitter } from "@/lib/error-emitter";

export function AdminUserEditor({ user }: { user: AppUser }) {
  const { db } = getFirebase();
  const { toast } = useToast();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [editedUser, setEditedUser] = useState<Partial<AppUser>>({ email: user.email, role: user.role });

  const handleUpdateUser = async () => {
    if (user && editedUser) {
      const userDocRef = doc(db, 'users', user.id);
      try {
        await updateDoc(userDocRef, editedUser);
        toast({
            title: "Usuário atualizado!",
            description: "Os dados do usuário foram salvos. A página será recarregada para refletir as mudanças.",
        });
        // Recarregar a página para mostrar os dados atualizados do servidor
        setTimeout(() => window.location.reload(), 2000);
      } catch (error) {
          console.error("Error updating user:", error);
          const permissionError = new FirestorePermissionError({
              path: userDocRef.path,
              operation: 'update',
              requestResourceData: editedUser,
          });
          errorEmitter.emit('permission-error', permissionError);
          toast({
            variant: "destructive",
            title: "Erro ao atualizar",
            description: "Não foi possível salvar as alterações. Verifique as permissões.",
          });
      } finally {
        setIsEditDialogOpen(false);
      }
    }
  };

  return (
    <>
      <Button variant="outline" size="sm" onClick={() => setIsEditDialogOpen(true)}>
        Editar
      </Button>

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
                onChange={(e) => setEditedUser(prev => ({ ...prev, email: e.target.value }))}
                className="col-span-3"
                disabled // Desabilitado para evitar mudanças no email que é usado para login
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Select
                value={editedUser.role || 'user'}
                onValueChange={(value) => setEditedUser(prev => ({ ...prev, role: value as 'admin' | 'user' }))}
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
    </>
  );
}
