
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp, Timestamp, CollectionReference } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Skeleton } from "../ui/skeleton";
import { errorEmitter } from "@/lib/error-emitter";
import { FirestorePermissionError } from "@/lib/errors";

interface Comment {
  id: string;
  userId: string;
  userName: string;
  userPhotoURL: string | null;
  text: string;
  createdAt: Timestamp;
}

interface CommentsProps {
  topicType: string;
  topicId: string;
}

export function Comments({ topicType, topicId }: CommentsProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const commentsCollectionName = `${topicType}_comments`;

  useEffect(() => {
    if (!topicId) return;

    setIsFetching(true);
    const commentsCollectionRef = collection(db, commentsCollectionName) as CollectionReference<Omit<Comment, 'id'>>;
    const q = query(
      commentsCollectionRef,
      where("topicId", "==", topicId),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData: Comment[] = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() } as Comment);
      });
      setComments(commentsData);
      setIsFetching(false);
    }, (serverError) => {
        const permissionError = new FirestorePermissionError({
          path: commentsCollectionRef.path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setIsFetching(false);
    });

    return () => unsubscribe();
  }, [topicId, commentsCollectionName, toast]);

  const handleAddComment = async () => {
    if (!user) {
      toast({
        variant: "destructive",
        title: "Acesso negado",
        description: "Você precisa estar logado para comentar.",
      });
      return;
    }

    if (newComment.trim() === "") {
        toast({
            variant: "destructive",
            title: "Comentário vazio",
            description: "Por favor, escreva algo antes de enviar.",
        });
        return;
    }

    setIsLoading(true);
    
    const commentData = {
        topicId: topicId,
        userId: user.uid,
        userName: user.displayName || user.email || "Anônimo",
        userPhotoURL: user.photoURL,
        text: newComment.trim(),
        createdAt: serverTimestamp(),
      };

    const commentsCollectionRef = collection(db, commentsCollectionName);

    addDoc(commentsCollectionRef, commentData)
      .then(() => {
        setNewComment("");
      })
      .catch((serverError) => {
        const permissionError = new FirestorePermissionError({
            path: commentsCollectionRef.path,
            operation: 'create',
            requestResourceData: commentData,
        });
        errorEmitter.emit('permission-error', permissionError);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  return (
    <div className="rounded-lg border bg-card p-6">
      <h2 className="font-headline text-2xl font-bold tracking-tight mb-6">Comentários</h2>
      
      {user ? (
        <div className="flex flex-col gap-4 mb-8">
            <Textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Deixe seu comentário aqui..."
                rows={3}
                disabled={isLoading}
            />
            <Button onClick={handleAddComment} disabled={isLoading} className="self-end">
                {isLoading ? "Enviando..." : "Enviar Comentário"}
            </Button>
        </div>
      ) : (
        <div className="text-center text-muted-foreground mb-8 p-4 bg-muted rounded-md">
            Você precisa estar logado para deixar um comentário.
        </div>
      )}

      <div className="space-y-6">
        {isFetching ? (
            <div className="space-y-6">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-start space-x-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-2 flex-1">
                            <Skeleton className="h-4 w-1/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    </div>
                ))}
            </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.userPhotoURL || undefined} alt={comment.userName} />
                <AvatarFallback>
                  <User />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                    <p className="font-bold">{comment.userName}</p>
                    <span className="text-xs text-muted-foreground">
                    • {comment.createdAt ? formatDistanceToNow(comment.createdAt.toDate(), { addSuffix: true, locale: ptBR }) : 'agora'}
                    </span>
                </div>
                <p className="text-foreground/90 whitespace-pre-wrap">{comment.text}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-muted-foreground py-8">
            Nenhum comentário ainda. Seja o primeiro a comentar!
          </div>
        )}
      </div>
    </div>
  );
}
