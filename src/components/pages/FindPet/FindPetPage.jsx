import { NoticesFilters } from '../../../components/Filter/NoticesFilters';
import { Title, Div } from '../FindPet/FindPetPage.styled';
export const FindPetPage = ({ notites }) => {
  return (
    <Div>
      <Title>Find your favorite pet</Title>
      <NoticesFilters notites={notites} />
    </Div>
  );
};
