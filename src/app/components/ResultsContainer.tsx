"use client";

import { useState } from "react";
import { Box, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { WarningIcon, CheckCircleIcon } from "@chakra-ui/icons";

type ResultItem = {
  id: string;
  description?: string;
  help?: string;
  helpUrl?: string;
  impact?: string | null;
};

type AnalysisResults = {
  violations?: ResultItem[];
  passes?: ResultItem[];
  inapplicable?: ResultItem[];
};

type ResultsContainerProps = {
  results: AnalysisResults | null;
  isLoading: boolean;
  errorMessage: string | null;
};

const ResultsContainer = ({ results, isLoading, errorMessage }: ResultsContainerProps) => {
  const [showPassedChecks, setShowPassedChecks] = useState(false);

  if (errorMessage) {
    return (
      <Box mt={6} p={5} bg="#FCE1E7" borderLeft="4px solid #8B3452" borderRadius="6px" role="alert">
        <Text color="#6F2440" fontSize="17px">
          {errorMessage}
        </Text>
      </Box>
    );
  }

  if (isLoading) {
    return (
      <Flex
        mt={10}
        py={8}
        align="center"
        justify="center"
        direction="column"
        gap={4}
        role="status"
        aria-live="polite"
      >
        <Box
          width="64px"
          height="64px"
          border="5px solid #E5DDF4"
          borderTopColor="#7564B5"
          borderRightColor="#E7A5BB"
          borderRadius="full"
          animation="spin 1s linear infinite"
          sx={{
            "@keyframes spin": {
              from: { transform: "rotate(0deg)" },
              to: { transform: "rotate(360deg)" },
            },
            "@media (prefers-reduced-motion: reduce)": {
              animation: "none",
            },
          }}
          aria-hidden="true"
        />

        <Text color="#302A54" fontSize="18px" fontWeight="medium" textAlign="center">
          Analyzing your website...
        </Text>

        <Text color="#777186" fontSize="14px" textAlign="center">
          This may take a few seconds
        </Text>
      </Flex>
    );
  }

  if (!results) {
    return null;
  }

  const violations = results.violations ?? [];
  const passes = results.passes ?? [];
  const inapplicable = results.inapplicable ?? [];

  return (
    <Box mt={12} mb={16} width="100%">
      {/* Results heading */}
      <Heading
        as="h2"
        fontSize={{ base: "28px", md: "32px" }}
        lineHeight="1.3"
        color="#302A54"
        mb={3}
      >
        Your accessibility results
      </Heading>

      <Text color="#514C61" fontSize="18px" lineHeight="1.7" mb={7}>
        Here&apos;s what we found during your accessibility check.
      </Text>

      {/* Summary badges */}
      <Flex gap={3} mb={10} width="100%" direction={{ base: "column", sm: "row" }}>
        <Flex
          flex="1"
          minW={0}
          bg="#FCE1E7"
          px={4}
          py={4}
          borderRadius="6px"
          align="center"
          justify="center"
          gap={3}
        >
          <WarningIcon color="#7F2947" boxSize={5} aria-hidden="true" />
          <Text color="#7F2947" fontSize="17px" fontWeight="semibold">
            {violations.length} {violations.length === 1 ? "issue found" : "issues found"}
          </Text>
        </Flex>

        <Flex
          flex="1"
          minW={0}
          bg="#D9EDE7"
          px={4}
          py={4}
          borderRadius="6px"
          align="center"
          justify="center"
          gap={3}
        >
          <CheckCircleIcon color="#245B4C" boxSize={5} aria-hidden="true" />
          <Text color="#245B4C" fontSize="17px" fontWeight="semibold">
            {passes.length} checks passed
          </Text>
        </Flex>
      </Flex>

      {/* Issues */}
      <Box mb={11}>
        <Heading as="h3" fontSize="26px" color="#302A54" mb={7}>
          Issues to improve
        </Heading>

        {violations.length > 0 ? (
          <Box>
            {violations.map((violation, index) => (
              <Box key={violation.id} pb={8} mb={8} borderBottom="1px solid #DDD8E5">
                <Flex align="flex-start" gap={4} mb={5}>
                  <Box
                    bg="#FCE1E7"
                    color="#7F2947"
                    px={3}
                    py={2}
                    borderRadius="6px"
                    fontSize="16px"
                    fontWeight="bold"
                    flexShrink={0}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Box>

                  <Heading as="h4" fontSize="20px" lineHeight="1.45" color="#302A54">
                    {violation.help || violation.description || violation.id}
                  </Heading>
                </Flex>

                {violation.description && violation.description !== violation.help && (
                  <Text color="#514C61" fontSize="17px" lineHeight="1.7" mb={6}>
                    {violation.description}
                  </Text>
                )}

                {/* Extra guidance for landmark issues */}
                {violation.id === "region" && (
                  <Box
                    bg="#E8E1FF"
                    px={{ base: 6, md: 8 }}
                    py={{ base: 7, md: 9 }}
                    borderRadius="6px"
                    mb={6}
                  >
                    <Heading as="h5" fontSize="20px" color="#302A54" mb={4}>
                      Why does this matter?
                    </Heading>

                    <Text color="#302A54" fontSize="17px" lineHeight="1.8" mb={8}>
                      Landmarks help people using screen readers navigate between different parts of
                      a webpage.
                    </Text>

                    <Heading as="h5" fontSize="20px" color="#302A54" mb={4}>
                      How can you improve this?
                    </Heading>

                    <Text color="#302A54" fontSize="17px" lineHeight="1.8">
                      Use semantic HTML elements such as main, nav and header to organize your page
                      into clear sections.
                    </Text>
                  </Box>
                )}

                {violation.helpUrl && (
                  <Link
                    href={violation.helpUrl}
                    isExternal
                    color="#514080"
                    fontSize="17px"
                    fontWeight="semibold"
                    textDecoration="underline"
                    _focusVisible={{
                      outline: "3px solid #8B72D6",
                      outlineOffset: "3px",
                    }}
                  >
                    Read more about this issue
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        ) : (
          <Box bg="#D9EDE7" p={5} borderRadius="6px">
            <Text color="#245B4C" fontSize="18px">
              No violations were detected in this scan.
            </Text>
          </Box>
        )}
      </Box>

      {/* Passed checks */}
      {passes.length > 0 && (
        <Box mb={10}>
          <Heading as="h3" fontSize="24px" color="#302A54" mb={3}>
            What passed
          </Heading>

          <Text color="#514C61" fontSize="18px" lineHeight="1.6" mb={4}>
            {passes.length} checks passed during the scan.
          </Text>

          <Button
            variant="link"
            color="#514080"
            fontSize="17px"
            fontWeight="semibold"
            onClick={() => setShowPassedChecks((previous) => !previous)}
            aria-expanded={showPassedChecks}
            aria-controls="passed-checks-list"
            _focusVisible={{
              outline: "3px solid #8B72D6",
              outlineOffset: "3px",
            }}
          >
            {showPassedChecks ? "Hide passed checks −" : "View passed checks +"}
          </Button>

          <Box
            id="passed-checks-list"
            hidden={!showPassedChecks}
            mt={6}
            bg="#D9EDE7"
            p={5}
            borderRadius="6px"
          >
            {passes.map((pass) => (
              <Text key={pass.id} color="#245B4C" fontSize="17px" lineHeight="1.7" py={2}>
                ✓ {pass.help || pass.description || pass.id}
              </Text>
            ))}
          </Box>
        </Box>
      )}

      {/* Other checks */}
      {inapplicable.length > 0 && (
        <Box borderTop="1px solid #DDD8E5" pt={7} mb={9}>
          <Heading as="h3" fontSize="24px" color="#302A54" mb={3}>
            Other checks
          </Heading>

          <Text color="#514C61" fontSize="17px" lineHeight="1.7">
            {inapplicable.length} rules were not applicable to the elements found on this page.
          </Text>
        </Box>
      )}

      {/* Important reminder */}
      <Box bg="#FFF0CD" p={5} borderRadius="6px">
        <Text color="#77521B" fontSize="17px" lineHeight="1.7">
          Automated checks cannot detect every accessibility issue. Manual testing is also
          important.
        </Text>
      </Box>
    </Box>
  );
};

export default ResultsContainer;
