import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
// import { ToggleColorMode } from './ToggleColorMode'
// import { NavLink } from "./NavLink";
import { useBalance } from "wagmi";

export const NavBar = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  });

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <HStack h={20} alignItems={"center"} justifyContent={"space-between"}>
        <div class="flex gap-2 items-end">
          <Box style={{ fontWeight: "800", cursor: "pointer" }}>
            <div class="text-2xl">Model NFTs</div>
          </Box>
          <div class="flex gap-1 text-xs">
            <div>by</div>
            <a href="https://twitter.com/elfouly_sharif">
              <div class="text-blue-400">@elfouly_sharif</div>
            </a>
          </div>
        </div>
        <HStack>
          <Box mr={6} style={{ fontWeight: "800", cursor: "pointer" }}>
            {/* <NavLink route={"/bets"}>Bets</NavLink> */}
          </Box>
          <Box mr={6}>
            {address ? (
              <Box cursor="pointer">
                <a onClick={() => disconnect()}>Disconnect</a>
              </Box>
            ) : (
              <ConnectButton />
            )}
          </Box>
          {/* <ToggleColorMode /> */}
        </HStack>
      </HStack>
    </Box>
  );
};
