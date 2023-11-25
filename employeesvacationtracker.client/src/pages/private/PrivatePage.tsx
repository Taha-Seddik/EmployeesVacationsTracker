import { Outlet } from 'react-router-dom';
import { AdminPageLayout } from '../../layout/main';

const PrivatePage: React.FC<{}> = () => {
  return (
    <AdminPageLayout>
      <Outlet />
    </AdminPageLayout>
  );
};

export default PrivatePage;
