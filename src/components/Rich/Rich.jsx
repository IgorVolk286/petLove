import {
  Div,
  DivLogo,
  H2,
  Span,
  P,
  DivTitle,
  Content,
} from '../Rich/Rich.styled';

export const Rich = () => {
  return (
    <Div>
      <DivLogo> </DivLogo>
      <div>
        <DivTitle>
          <H2>Rich</H2>
          <P>
            Birthday:<Span>21.09.2020 </Span>
          </P>
        </DivTitle>
        <Content>
          Rich would be the perfect addition to an active family that loves to
          play and go on walks. I bet he would love having a doggy playmate too!
        </Content>
      </div>
    </Div>
  );
};
