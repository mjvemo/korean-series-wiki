export interface ComponentProps {
  params: { id: string };
}

export default function Props(props: ComponentProps) {
  const { id } = props.params;

  return <div>This is a page to edit {id}</div>;
}
