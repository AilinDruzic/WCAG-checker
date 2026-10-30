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
        >
          How it works
        </Link>
      </Flex>

      {/* Main content */}
      <Container maxW="lg" centerContent>
        <Heading as="h1" size="xl" mt="16" mb="4" textAlign="center">
          Is Your Website Accessible To Everyone?
        </Heading>

        <Text mb="4" textAlign="center">
          Enter your URL and receive a detailed report on your site&apos;s accessibility based on
          WCAG standards.
        </Text>

        <Box width="100%">
          <UrlInput value={url} onChange={(e) => setUrl(e.target.value)} />

          <SubmitButton onClick={handleAnalyze} isLoading={isLoading} />

          <ResultsContainer results={results} isLoading={isLoading} errorMessage={errorMessage} />
        </Box>
      </Container>
    </Box>
  );
}
