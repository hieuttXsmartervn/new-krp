export type ApiError = {
  statusCode: number;
  message: string | string[];
  error?: string;
};

// Add shared contracts only after confirming the existing .NET API and DB model.
