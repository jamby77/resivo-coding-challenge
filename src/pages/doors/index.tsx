import Head from 'next/head';
import { useGetAllDoorsQuery } from '@/ui/apiSlice';
import { DoorList } from '@/ui/components/DoorList';
import { Layout } from '@/ui/layout/Layout';

export default function DoorListPage() {
  const { data: doors = [], isSuccess } = useGetAllDoorsQuery();

  return (
    <>
      <Head>
        <title>Door list</title>
        <meta name="description" content="door list" />
      </Head>
      <Layout title="Doors">{isSuccess && <DoorList doors={doors} />}</Layout>
    </>
  );
}
