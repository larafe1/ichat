import { useState, type ChangeEvent, type FunctionComponent } from "react";

import { useMutation } from "@apollo/client";
import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";

import { userOperations } from "@/graphql/operations";
import { useAuth } from "@/hooks";

import type { AuthProps, CreateUserData, CreateUserVariables } from "./types";

const Auth: FunctionComponent<AuthProps> = ({ session }) => {
  const [username, setUsername] = useState("");

  const { signIn } = useAuth();

  const [createUser, { data, loading, error }] = useMutation<
    CreateUserData,
    CreateUserVariables
  >(userOperations.Mutations.createUser);

  const handleSignIn = async () => await signIn();

  const handleChangeUsername = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setUsername(target.value);

  const onSubmit = async () => {
    if (!username.length) return;
    console.log(data, loading, error);

    try {
      await createUser({ variables: { username } });
    } catch (e) {
      console.error(e);
    }
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
