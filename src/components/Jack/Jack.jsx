import {
  Div,
  DivLogo,
  H2,
  Span,
  P,
  DivTitle,
  Content,
} from '../Jack/Jack.styled';

export const Jack = () => {
  return (
    <Div>
      <DivLogo> </DivLogo>
      <div>
        <DivTitle>
          <H2>Jack</H2>
          <P>
            Birthday:<Span>18.10.2021 </Span>
          </P>
        </DivTitle>
        <Content>
          Jack is a gray Persian cat with green eyes. He loves to be pampered
          and groomed, and enjoys playing with toys.
        </Content>
      </div>
    </Div>
  );
};
