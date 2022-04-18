import { ComponentStyleConfig } from "@chakra-ui/react";

const inputSize = { field: { borderRadius: "xl" } };

export const Input: ComponentStyleConfig = {
	parts: ["field"],
	sizes: {
		lg: inputSize,
		md: inputSize,
		sm: inputSize,
		xs: inputSize,
	},
	defaultProps: {
		variant: "filled",
	},
};

export const Textarea: ComponentStyleConfig = {
	defaultProps: {
		variant: "filled",
	},
	sizes: {
		xs: inputSize.field,
		sm: inputSize.field,
		md: inputSize.field,
		lg: inputSize.field,
	},
};