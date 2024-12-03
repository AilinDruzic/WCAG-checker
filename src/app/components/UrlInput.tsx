import {Input} from "@chakra-ui/react";

type UrlInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const UrlInput = ({ value, onChange }: UrlInputProps) => {
    return (
      <Input
        placeholder="Enter URL"
        size="md"
        value={value}
        onChange={onChange}
        marginBottom="4"
        bg="white"
        color="black"
      />
    );
  };
  
  export default UrlInput;