import { useState, type ChangeEvent, type FunctionComponent } from "react";

import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";

import { useAuth } from "@/hooks";

import type { AuthProps } from "./types";

const Auth: FunctionComponent<AuthProps> = ({ session }) => {
  const [username, setUsername] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = async () => await signIn();

  const handleChangeUsername = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setUsername(target.value);

  const onSubmit = async () => {
    // createUsername mutation to send username to the server
  };

  return (
    <Center height="100vh">
      <Stack align="center" spacing={8}>
        {session && (
          <>
            <Text fontSize="3xl">Create a username</Text>

            <Input
              placeholder="Enter a username"
              value={username}
              onChange={handleChangeUsername}
            />

            <Button width="100%" onClick={onSubmit}>
              Save
            </Button>
          </>
        )}

        {!session && (
          <>
            <Text fontSize="3xl">iChat</Text>

            <Button
              leftIcon={
                <Image
                  height="20px"
                  src="/images/google-icon.png"
                  alt="Google"
                />
              }
              onClick={handleSignIn}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
