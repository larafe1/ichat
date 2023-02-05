import type { FunctionComponent } from "react";

import { signOut } from "next-auth/react";

import { Button } from "@chakra-ui/react";

const Chat: FunctionComponent = () => {
  const handleSignOut = async () => await signOut();

  return (
    <div>
      <h1>Chat</h1>

      <Button onClick={handleSignOut}>Sign out</Button>
    </div>
  );
};

export default Chat;
