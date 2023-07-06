import * as React from 'react';
import Home from 'sections/home';

export default () => {
  return (
    <div>
      <Home />
    </div>
    /*<>
    
      <Icon icon={IconType.Twitter} />
      <Icon icon={IconType.Twitter} color="primary" />
      <Icon icon={IconType.Twitter} color="secondary" />
      <Icon icon={IconType.Twitter} color="twitter" />
      <Icon icon={IconType.Twitter} color="itchio" />
    </>*/
    /*<Container fullHeight>
      <div className="flex justify-center items-center h-full">
        <Stack direction="row">
          <Button color="primary" variant="solid" text="Button" />
          <Button color="secondary" variant="outline" text="T" />
          <Button color="twitter" variant="solid" text="Twitter" />
          <Button color="github" variant="outline" text="Git" />
          <Button color="twitter" variant="neutral" text="Button" />

          <IconButton
            color="twitter"
            variant="neutral"
            icon={IconType.Twitter}
          />
        </Stack>
      </div>
    </Container>*/
  );
};

/*
const Buttons = () => {
  return (
    <Stack>
      <Button>Projects</Button>
      <Button>CV</Button>
    </Stack>
  );
};

export default () => {
  return (
    <>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Stack>
            <Text as="h2">Hi, I'm Jamie!</Text>
            <Text as="h3">A Software Developer</Text>
            <SocialLinks />
            <Buttons />
          </Stack>
        </Box>
      </Container>
    </>
  );
};
*/
