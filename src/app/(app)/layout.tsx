
export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Este layout é agora um componente de servidor puro por padrão.
  // A estrutura visual é aplicada dentro de ClientAppLayout ou diretamente nas páginas.
  return <>{children}</>;
}
