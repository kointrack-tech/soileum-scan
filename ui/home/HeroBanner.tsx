import { Box, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

import config from "configs/app";
import RewardsButton from "ui/rewards/RewardsButton";
import AdBanner from "ui/shared/ad/AdBanner";
import SearchBar from "ui/snippets/searchBar/SearchBar";
import UserProfileDesktop from "ui/snippets/user/profile/UserProfileDesktop";
import UserWalletDesktop from "ui/snippets/user/wallet/UserWalletDesktop";

const BACKGROUND_DEFAULT =
  "radial-gradient(103.03% 103.03% at 0% 0%, rgb(183 148 244 / 42%) 0%, rgb(0 24 180 / 80%) 100%), #e142d7";
const TEXT_COLOR_DEFAULT = "white";
const BORDER_DEFAULT = "none";

const HeroBanner = () => {
  const background = useColorModeValue(
    // light mode
    config.UI.homepage.heroBanner?.background?.[0] ||
      config.UI.homepage.plate.background ||
      BACKGROUND_DEFAULT,
    // dark mode
    config.UI.homepage.heroBanner?.background?.[1] ||
      config.UI.homepage.heroBanner?.background?.[0] ||
      config.UI.homepage.plate.background ||
      BACKGROUND_DEFAULT
  );

  const textColor = useColorModeValue(
    // light mode
    config.UI.homepage.heroBanner?.text_color?.[0] ||
      config.UI.homepage.plate.textColor ||
      TEXT_COLOR_DEFAULT,
    // dark mode
    config.UI.homepage.heroBanner?.text_color?.[1] ||
      config.UI.homepage.heroBanner?.text_color?.[0] ||
      config.UI.homepage.plate.textColor ||
      TEXT_COLOR_DEFAULT
  );

  const border = useColorModeValue(
    config.UI.homepage.heroBanner?.border?.[0] || BORDER_DEFAULT,
    config.UI.homepage.heroBanner?.border?.[1] ||
      config.UI.homepage.heroBanner?.border?.[0] ||
      BORDER_DEFAULT
  );

  return (
    <Flex
      w="100%"
      background={background}
      border={border}
      borderRadius="3px"
      p={{ base: 4, lg: 8 }}
      columnGap={8}
      alignItems="center"
    >
      <Box flexGrow={1}>
        <Flex
          mb={{ base: 2, lg: 3 }}
          justifyContent="space-between"
          alignItems="center"
          columnGap={2}
        >
          <Heading
            as="h1"
            fontSize={{ base: "18px", lg: "30px" }}
            lineHeight={{ base: "24px", lg: "36px" }}
            fontWeight={{ base: 500, lg: 700 }}
            color={textColor}
          >
            {config.meta.seo.enhancedDataEnabled
              ? `${config.chain.name} Scan`
              : `${config.chain.name} Scan`}
          </Heading>
          {config.UI.navigation.layout === "vertical" && (
            <Box display={{ base: "none", lg: "flex" }} gap={2}>
              {config.features.rewards.isEnabled && (
                <RewardsButton variant="hero" />
              )}
              {(config.features.account.isEnabled && (
                <UserProfileDesktop buttonVariant="hero" />
              )) ||
                (config.features.blockchainInteraction.isEnabled && (
                  <UserWalletDesktop buttonVariant="hero" />
                ))}
            </Box>
          )}
        </Flex>
        <SearchBar isHomepage />
      </Box>
      <AdBanner
        platform="mobile"
        w="fit-content"
        flexShrink={0}
        borderRadius="md"
        overflow="hidden"
        display={{ base: "none", lg: "block " }}
      />
    </Flex>
  );
};

export default React.memo(HeroBanner);
