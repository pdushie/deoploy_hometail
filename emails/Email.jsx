import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Img,
} from "@react-email/components";

const Email = ({ magicLink, message, isLogin }) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>{`APP_NAME ${
          isLogin ? "Login" : "Email Verification"
        }`}</Preview>
        <Body className="text-[#21212] bg-white font-sans">
          <Container className="p-[20px] mx-auto bg-[#eee]">
            <Section className="bg-white">
              <Section className="bg-[#252f3d] py-[20px] w-full text-center mx-auto">
                <Section className="mx-auto w-[50px] inline-block align-middle">
                  <Img src={"APP_LOGO"} width="40" height="40" alt="APP_NAME" />
                </Section>
                <Text className="text-white text-3xl font-bold inline-block align-middle ml-2">
                  APP_NAME
                </Text>
              </Section>
              <Section className="py-[25px] px-[35px]">
                <Heading className="text-[#333] font-lg font-bold mb-[15px] text-center">
                  {isLogin ? "Log in to APP_NAME" : "Verify your email address"}
                </Heading>
                <Text className="mb-[14px] text-center">{message}</Text>
                <Section className="text-center">
                  <Text className="m-0 font-bold">Verification email</Text>
                  <Text className="my-[10px] text-4xl font-bold">
                    <a
                      href={magicLink}
                      target="_blank"
                      className="my-[10px] text-4xl font-bold"
                    >
                      {isLogin ? "Log in" : "Verify Email"}
                    </a>
                  </Text>
                  <Text className="m-0">
                    (This link is valid for 10 minutes)
                  </Text>
                </Section>
              </Section>
              <Hr />
              <Section className="py-[25px] px-[35px]">
                <Text className="m-0 text-center">
                  APP_NAME will never email you and ask you to disclose or
                  verify your password, credit card, bank account number, or
                  other personal information.
                </Text>
              </Section>
            </Section>
            <Text className="text-[#333] text-sm px-[20px] text-center">
              This message was produced and distributed by APP_NAME.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default Email;
