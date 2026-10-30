"use client";

import { useState } from "react";
import { Box, Container, Heading, Text, Flex, Link } from "@chakra-ui/react";

import UrlInput from "./components/UrlInput";
import SubmitButton from "./components/SubmitButton";
import ResultsContainer from "./components/ResultsContainer";
import type { AxeResults } from "axe-core";

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export default function Home() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState<AxeResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (isLoading) return;

    if (!url.trim()) {
      setErrorMessage("You need to paste a URL!");
      return;
    }

    if (!isValidUrl(url)) {
      setErrorMessage("Please enter a valid URL!");
      return;
    }

    setErrorMessage(null);
    setIsLoading(true);
    setResults(null);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "An unexpected error occurred");
        return;
      }

      const data = await response.json();
      setResults(data);
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box>
      {/* Navbar */}
      <Flex
        as="nav"
        maxW="1100px"
        mx="auto"
        px={{ base: 6, md: 10 }}
        py={6}
        align="center"
        justify="space-between"
      >
        <Text fontSize="xl" fontWeight="bold" color="#302A54">
          Accessibly.
        </Text>

        <Link
          href="#how-it-works"
          color="#302A54"
          fontSize="sm"
          fontWeight="medium"
          _hover={{
            textDecoration: "underline",
          }}
          _focusVisible={{
            outline: "3px solid #8B72D6",
            outlineOffset: "3px",
          }}
        >
          How it works
        </Link>
      </Flex>

      {/* Main content */}
      <Container maxW="lg" centerContent>
        <Box id="checker" width="100%">
          <Heading as="h1" size="xl" mt="16" mb="4" textAlign="center">
            Is Your Website Accessible To Everyone?
          </Heading>

          <Text mb="4" textAlign="center">
            Enter your URL and receive a detailed report on your site&apos;s accessibility based on
            WCAG standards.
          </Text>

          <Box
            as="form"
            width="100%"
            onSubmit={(event: React.FormEvent<HTMLDivElement>) => {
              event.preventDefault();
              void handleAnalyze();
            }}
          >
            <UrlInput value={url} onChange={(e) => setUrl(e.target.value)} />

            <SubmitButton onClick={handleAnalyze} isLoading={isLoading} />

            <ResultsContainer results={results} isLoading={isLoading} errorMessage={errorMessage} />
          </Box>
        </Box>
      </Container>

      {/* How it works section */}
      <Box
        as="section"
        id="how-it-works"
        mt={{ base: 10, md: 32 }}
        py={{ base: 12, md: 16 }}
        px={6}
        bg="#EDE6F7"
      >
        <Container maxW="1000px">
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px" }}
            color="#302A54"
            textAlign="center"
            mb={4}
          >
            How it works
          </Heading>

          <Text color="#514C61" fontSize="17px" textAlign="center" lineHeight="1.7" mb={12}>
            Check your website&apos;s accessibility in three simple steps.
          </Text>

          <Flex direction={{ base: "column", md: "row" }} gap={5} align="stretch">
            {/* Step 1 */}
            <Flex
              flex="1"
              direction="column"
              align="center"
              textAlign="center"
              bg="#FFFFFF"
              borderRadius="12px"
              p={7}
              gap={4}
              border="1px solid #E9E2F2"
            >
              <Flex
                width="56px"
                height="56px"
                bg="#E8E1FF"
                color="#514080"
                borderRadius="full"
                align="center"
                justify="center"
                fontSize="20px"
                fontWeight="bold"
                aria-hidden="true"
              >
                01
              </Flex>

              <Heading as="h3" fontSize="20px" color="#302A54">
                Enter your URL
              </Heading>

              <Text color="#514C61" fontSize="16px" lineHeight="1.7">
                Paste the address of the website you want to check.
              </Text>
            </Flex>

            {/* Step 2 */}
            <Flex
              flex="1"
              direction="column"
              align="center"
              textAlign="center"
              bg="#FFFFFF"
              borderRadius="12px"
              p={7}
              gap={4}
              border="1px solid #E9E2F2"
            >
              <Flex
                width="56px"
                height="56px"
                bg="#FCE1E7"
                color="#8B3452"
                borderRadius="full"
                align="center"
                justify="center"
                fontSize="20px"
                fontWeight="bold"
                aria-hidden="true"
              >
                02
              </Flex>

              <Heading as="h3" fontSize="20px" color="#302A54">
                Run the check
              </Heading>

              <Text color="#514C61" fontSize="16px" lineHeight="1.7">
                We scan the page for potential accessibility issues using automated checks.
              </Text>
            </Flex>

            {/* Step 3 */}
            <Flex
              flex="1"
              direction="column"
              align="center"
              textAlign="center"
              bg="#FFFFFF"
              borderRadius="12px"
              p={7}
              gap={4}
              border="1px solid #E9E2F2"
            >
              <Flex
                width="56px"
                height="56px"
                bg="#D9EDE7"
                color="#245B4C"
                borderRadius="full"
                align="center"
                justify="center"
                fontSize="20px"
                fontWeight="bold"
                aria-hidden="true"
              >
                03
              </Flex>

              <Heading as="h3" fontSize="20px" color="#302A54">
                Explore your results
              </Heading>

              <Text color="#514C61" fontSize="16px" lineHeight="1.7">
                Discover what passed and what you can improve to make your website more accessible.
              </Text>
            </Flex>
          </Flex>

          {/* Accessibility reminder */}
          <Text color="#686174" fontSize="14px" textAlign="center" lineHeight="1.7" mt={10}>
            Automated accessibility checks are a helpful starting point, but they cannot replace
            manual testing.
          </Text>
        </Container>
      </Box>

      {/* Smooth scrolling, respecting reduced-motion settings */}
      <Box
        as="style"
        dangerouslySetInnerHTML={{
          __html: `
            @media (prefers-reduced-motion: no-preference) {
              html {
                scroll-behavior: smooth;
              }
            }
          `,
        }}
      />
    </Box>
  );
}
