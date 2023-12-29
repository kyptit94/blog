import dynamic from 'next/dynamic';

const AdminDashboardNoSSR = dynamic(
  () => import('../components/admin/index'),
  { ssr: false }
);

function AdminPage() {
  return <AdminDashboardNoSSR />;
}

export default AdminPage;