'use client';
import { useGetPlantsQuery } from '@/common/api/base.Api';

export default function Home() {
  const { data } = useGetPlantsQuery();

  console.log('DATA:', data);

  return <div className={'flex min-h-screen w-full bg-blue-400'}>{JSON.stringify(data)}</div>;
}
