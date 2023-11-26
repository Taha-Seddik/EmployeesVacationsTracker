import { MainSideContainer } from './layout.styles';
import { MainSideTopBarRoot } from './adminMainSideTopBar';
import { styled } from '@mui/material/styles';

type IProps = {
  openNav: boolean;
  toggleDrawer: () => void;
  children: React.ReactElement;
};

const MainSideContent = styled('div')(({ theme }) => ({
  // padding: theme.spacing(1),
  flexGrow: 1,
  margin: theme.spacing(2, 4),
}));

export const AdminMainSide: React.FC<IProps> = ({ toggleDrawer, children }) => {
  return (
    <MainSideContainer>
      {/* Top bar  */}
      <MainSideTopBarRoot toggleDrawer={toggleDrawer} />
      <MainSideContent>{children}</MainSideContent>
    </MainSideContainer>
  );
};
