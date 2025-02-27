import { ZodIssue } from "zod";

/**
 * Handles the result of a Zod validation.
 *
 * @param {Object} validation - The validation result object.
 * @param {boolean} validation.success - Indicates whether the validation was successful.
 * @param {Object} [validation.error] - The error object containing validation issues, if any.
 * @param {ZodIssue[]} [validation.error.errors] - An array of Zod issues describing the validation errors.
 * @returns {boolean} - Returns true if the validation was successful, otherwise throws an error.
 * @throws {Error} - Throws an error with a formatted message if the validation fails.
 */
export const zodValidationHandler = (validation: {
	success: boolean;
	error?: { errors: ZodIssue[] };
}): boolean => {
	if (!validation.success && validation.error) {
		throw new Error(mapZodErrorToString(validation.error.errors));
	}
	return validation.success;
};
const mapZodErrorToString = (errors: ZodIssue[]) => {
	return errors
		.map((error) => {
			if (error.code === "invalid_type") {
				return `expected: ${error.expected} received: ${error.received}`;
			}
			return `message: ${error.message}`;
		})
		.join(", ");
};
