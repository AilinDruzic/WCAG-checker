"use client";

import { useId, useState } from "react";
import { Box, Heading, Text, Link, Flex, Button, Code } from "@chakra-ui/react";
import { WarningIcon, CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import type { AxeResults } from "axe-core";

type ResultsContainerProps = {
  results: AxeResults | null;
  isLoading: boolean;
  errorMessage: string | null;
};

type Violation = AxeResults["violations"][number];

const impactColors: Record<string, string> = {
  critical: "#84263F",
  serious: "#7F2947",
  moderate: "#77521B",
  minor: "#514080",
};

const getImpact = (impact?: string | null) => {
  if (!impact) return "Not specified";

  return impact.charAt(0).toUpperCase() + impact.slice(1);
};

const getWcagCriteria = (tags?: string[]) => {
  if (!tags) return [];

  return [
    ...new Set(
      tags
        .filter((tag) => /^wcag\d{3,4}$/.test(tag))
        .map((tag) => tag.replace("wcag", "").split("").join(".")),
    ),
  ];
};

const expandableButtonStyles = {
  width: "100%",
  minHeight: "52px",
  height: "auto",
  px: 4,
  py: 3,
  bg: "#F8F5FC",
  color: "#302A54",
  border: "1px solid #D8CDEA",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "semibold",
  justifyContent: "space-between",
  textAlign: "left" as const,
  whiteSpace: "normal" as const,
  _hover: {
    bg: "#EEE7FA",
    borderColor: "#A995D4",
  },
  _active: {
    bg: "#E8E1FF",
  },
  _focusVisible: {
    outline: "3px solid #8B72D6",
    outlineOffset: "3px",
  },
};

const IssueCard = ({ violation, index }: { violation: Violation; index: number }) => {
  const [showTechnicalDetails, setShowTechnicalDetails] = useState(false);
  const detailsId = useId();

  const impact = getImpact(violation.impact);
  const impactColor = impactColors[violation.impact ?? ""] ?? "#514C61";
  const criteria = getWcagCriteria(violation.tags);
  const nodes = violation.nodes ?? [];

  return (
    <Box bg="#FFFFFF" border="1px solid #E9E2F2" borderRadius="12px" p={{ base: 5, md: 6 }} mb={5}>
      {/* Issue number */}
      <Box
        bg="#FCE1E7"
        color="#7F2947"
        px={3}
        py={2}
        borderRadius="6px"
        fontSize="15px"
        fontWeight="bold"
        display="inline-block"
        mb={4}
      >
        {String(index + 1).padStart(2, "0")}
      </Box>

      {/* Issue title */}
      <Heading
        as="h4"
        fontSize="18px"
        fontWeight="semibold"
        lineHeight="1.5"
        color="#302A54"
        mb={3}
      >
        {violation.help || violation.description || violation.id}
      </Heading>

      {/* Description */}
      {violation.description && violation.description !== violation.help && (
        <Text color="#514C61" fontSize="16px" lineHeight="1.7" mb={4}>
          {violation.description}
        </Text>
      )}

      {/* Impact */}
      <Flex
        align="center"
        justify="space-between"
        gap={4}
        borderTop="1px solid #E9E2F2"
        pt={4}
        mb={5}
      >
        <Text color="#514C61" fontSize="16px">
          Impact level
        </Text>

        <Text color={impactColor} fontSize="16px" fontWeight="semibold">
          {impact}
        </Text>
      </Flex>

      {/* WCAG criteria */}
      {criteria.length > 0 && (
        <Box mb={5}>
          <Text color="#302A54" fontSize="16px" fontWeight="semibold" mb={2}>
            Related WCAG criteria
          </Text>

          <Flex gap={2} wrap="wrap">
            {criteria.map((criterion) => (
              <Box
                key={criterion}
                bg="#E8E1FF"
                color="#514080"
                px={3}
                py={1}
                borderRadius="6px"
                fontSize="14px"
                fontWeight="medium"
              >
                WCAG {criterion}
              </Box>
            ))}
          </Flex>
        </Box>
      )}

      {/* Helpful explanation */}
      {violation.id === "region" && (
        <Box bg="#E8E1FF" px={{ base: 5, md: 6 }} py={{ base: 5, md: 6 }} borderRadius="8px" mb={5}>
          <Heading as="h5" fontSize="17px" fontWeight="semibold" color="#302A54" mb={2}>
            Why does this matter?
          </Heading>

          <Text color="#302A54" fontSize="16px" lineHeight="1.7" mb={5}>
            Landmarks help people using screen readers navigate between different parts of a
            webpage.
          </Text>

          <Heading as="h5" fontSize="17px" fontWeight="semibold" color="#302A54" mb={2}>
            How can you improve this?
          </Heading>

          <Text color="#302A54" fontSize="16px" lineHeight="1.7">
            Use semantic HTML elements such as main, nav and header to organize your page into clear
            sections.
          </Text>
        </Box>
      )}

      {/* Technical details */}
      {nodes.length > 0 && (
        <Box mb={5}>
          <Text color="#514C61" fontSize="16px" mb={3}>
            <Text as="span" fontWeight="semibold" color="#302A54">
              Affected elements:
            </Text>{" "}
            {nodes.length}
          </Text>

          <Button
            {...expandableButtonStyles}
            onClick={() => setShowTechnicalDetails((previous) => !previous)}
            aria-expanded={showTechnicalDetails}
            aria-controls={detailsId}
          >
            <Flex align="center" gap={3}>
              <Box
                as="span"
                aria-hidden="true"
                fontSize="19px"
                color="#514080"
                fontFamily="monospace"
              >
                {"</>"}
              </Box>

              <Text as="span">Technical details</Text>
            </Flex>

            {showTechnicalDetails ? (
              <ChevronUpIcon boxSize={5} color="#514080" aria-hidden="true" />
            ) : (
              <ChevronDownIcon boxSize={5} color="#514080" aria-hidden="true" />
            )}
          </Button>

          <Box
            id={detailsId}
            hidden={!showTechnicalDetails}
            mt={3}
            bg="#F8F5FC"
            border="1px solid #E9E2F2"
            borderRadius="8px"
            p={{ base: 4, md: 5 }}
          >
            <Heading as="h5" fontSize="17px" color="#302A54" mb={4}>
              Affected HTML elements
            </Heading>

            {nodes.map((node, nodeIndex) => (
              <Box
                key={nodeIndex}
                mb={nodeIndex < nodes.length - 1 ? 5 : 0}
                pb={nodeIndex < nodes.length - 1 ? 5 : 0}
                borderBottom={nodeIndex < nodes.length - 1 ? "1px solid #DDD8E5" : "none"}
              >
                <Text fontSize="16px" fontWeight="semibold" color="#302A54" mb={3}>
                  Element {nodeIndex + 1}
                </Text>

                {node.target.length > 0 && (
                  <Box mb={4}>
                    <Text color="#514C61" fontSize="15px" mb={2}>
                      Element selector
                    </Text>

                    <Code
                      display="block"
                      whiteSpace="pre-wrap"
                      overflowWrap="anywhere"
                      p={3}
                      bg="#FFFFFF"
                      color="#302A54"
                      borderRadius="6px"
                      fontSize="14px"
                    >
                      {node.target.join(", ")}
                    </Code>
                  </Box>
                )}

                {node.html && (
                  <Box mb={4}>
                    <Text color="#514C61" fontSize="15px" mb={2}>
                      HTML snippet
                    </Text>

                    <Code
                      display="block"
                      whiteSpace="pre-wrap"
                      overflowWrap="anywhere"
                      p={3}
                      bg="#FFFFFF"
                      color="#302A54"
                      borderRadius="6px"
                      fontSize="14px"
                    >
                      {node.html}
                    </Code>
                  </Box>
                )}

                {node.failureSummary && (
                  <Box mt={4}>
                    <Text fontSize="16px" fontWeight="semibold" color="#302A54" mb={2}>
                      How to improve it
                    </Text>

                    <Text color="#514C61" fontSize="16px" lineHeight="1.7" whiteSpace="pre-line">
                      {node.failureSummary}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Documentation */}
      {violation.helpUrl && (
        <Link
          href={violation.helpUrl}
          isExternal
          color="#514080"
          fontSize="16px"
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
  );
};

const ResultsContainer = ({ results, isLoading, errorMessage }: ResultsContainerProps) => {
  const [showPassedChecks, setShowPassedChecks] = useState(false);
  const passedChecksId = useId();

  if (errorMessage) {
    return (
      <Box mt={6} p={5} bg="#FCE1E7" borderLeft="4px solid #8B3452" borderRadius="8px" role="alert">
        <Text color="#6F2440" fontSize="16px">
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

        <Text color="#302A54" fontSize="16px" fontWeight="medium" textAlign="center">
          Analyzing your website...
        </Text>

        <Text color="#777186" fontSize="14px" textAlign="center">
          This may take a few seconds
        </Text>
      </Flex>
    );
  }

  if (!results) return null;

  const violations = results.violations ?? [];
  const passes = results.passes ?? [];
  const inapplicable = results.inapplicable ?? [];

  return (
    <Box mt={12} mb={16} width="100%">
      <Heading as="h2" fontSize="28px" color="#302A54" mb={3}>
        Your accessibility results
      </Heading>

      <Text color="#514C61" fontSize="16px" lineHeight="1.7" mb={6}>
        Here&apos;s what we found during your accessibility check.
      </Text>

      {/* Summary */}
      <Flex gap={3} mb={9} direction={{ base: "column", sm: "row" }}>
        <Flex
          flex="1"
          bg="#FCE1E7"
          px={4}
          py={4}
          borderRadius="8px"
          align="center"
          justify="center"
          gap={3}
        >
          <WarningIcon color="#7F2947" boxSize={4} aria-hidden="true" />

          <Text color="#7F2947" fontSize="16px" fontWeight="semibold">
            {violations.length} {violations.length === 1 ? "issue found" : "issues found"}
          </Text>
        </Flex>

        <Flex
          flex="1"
          bg="#D9EDE7"
          px={4}
          py={4}
          borderRadius="8px"
          align="center"
          justify="center"
          gap={3}
        >
          <CheckCircleIcon color="#245B4C" boxSize={4} aria-hidden="true" />

          <Text color="#245B4C" fontSize="16px" fontWeight="semibold">
            {passes.length} checks passed
          </Text>
        </Flex>
      </Flex>

      {/* Issues */}
      <Box mb={10}>
        <Heading as="h3" fontSize="22px" color="#302A54" mb={6}>
          Issues to improve
        </Heading>

        {violations.length > 0 ? (
          violations.map((violation, index) => (
            <IssueCard key={violation.id} violation={violation} index={index} />
          ))
        ) : (
          <Box bg="#D9EDE7" p={5} borderRadius="8px">
            <Text color="#245B4C" fontSize="16px">
              No violations were detected in this scan.
            </Text>
          </Box>
        )}
      </Box>

      {/* Passed checks */}
      {passes.length > 0 && (
        <Box mb={9}>
          <Heading as="h3" fontSize="22px" color="#302A54" mb={3}>
            What passed
          </Heading>

          <Text color="#514C61" fontSize="16px" lineHeight="1.7" mb={4}>
            {passes.length} checks passed during the scan.
          </Text>

          <Button
            {...expandableButtonStyles}
            onClick={() => setShowPassedChecks((previous) => !previous)}
            aria-expanded={showPassedChecks}
            aria-controls={passedChecksId}
          >
            <Flex align="center" gap={3}>
              <CheckCircleIcon boxSize={5} color="#514080" aria-hidden="true" />
              <Text as="span">Passed checks</Text>
            </Flex>

            {showPassedChecks ? (
              <ChevronUpIcon boxSize={5} color="#514080" aria-hidden="true" />
            ) : (
              <ChevronDownIcon boxSize={5} color="#514080" aria-hidden="true" />
            )}
          </Button>

          <Box
            id={passedChecksId}
            hidden={!showPassedChecks}
            mt={3}
            bg="#D9EDE7"
            p={5}
            borderRadius="8px"
          >
            {passes.map((pass) => (
              <Text key={pass.id} color="#245B4C" fontSize="16px" lineHeight="1.7" py={2}>
                ✓ {pass.help || pass.description || pass.id}
              </Text>
            ))}
          </Box>
        </Box>
      )}

      {/* Other checks */}
      {inapplicable.length > 0 && (
        <Box borderTop="1px solid #DDD8E5" pt={6} mb={8}>
          <Heading as="h3" fontSize="22px" color="#302A54" mb={3}>
            Other checks
          </Heading>

          <Text color="#514C61" fontSize="16px" lineHeight="1.7">
            {inapplicable.length} rules were not applicable to the elements found on this page.
          </Text>
        </Box>
      )}

      <Box bg="#FFF0CD" p={5} borderRadius="8px">
        <Text color="#77521B" fontSize="16px" lineHeight="1.7">
          Automated checks cannot detect every accessibility issue. Manual testing is also
          important.
        </Text>
      </Box>
    </Box>
  );
};

export default ResultsContainer;
