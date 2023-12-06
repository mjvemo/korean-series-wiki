"use client";

interface PageProps {
  params: {
    id: string;
  };
}
export default function Page(props: PageProps) {
  return <div>{props.params.id}</div>;
}
