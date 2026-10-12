export type PilotRequest = {
  id: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
  submittedAt: string;
};

export const PILOT_STORAGE_KEY = "conductlens_pilot_requests";

export function getSavedPilotRequests(): PilotRequest[] {
  const raw = localStorage.getItem(PILOT_STORAGE_KEY);
  if (raw === null) {
    return [];
  }
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePilotRequest(
  values: Omit<PilotRequest, "id" | "submittedAt">
): PilotRequest {
  const raw = localStorage.getItem(PILOT_STORAGE_KEY);
  let previous: unknown = [];

  if (raw !== null) {
    try {
      previous = JSON.parse(raw);
    } catch {
      throw new Error(
        "Existing saved requests could not be read. Nothing was overwritten."
      );
    }
  }

  if (!Array.isArray(previous)) {
    throw new Error(
      "Existing saved requests are not in the expected format. Nothing was overwritten."
    );
  }

  const request: PilotRequest = {
    id:
      globalThis.crypto?.randomUUID?.() ??
      ("pilot-" + Date.now() + "-" + Math.random().toString(36).slice(2)),
    fullName: values.fullName.trim(),
    phoneNumber: values.phoneNumber.trim(),
    emailAddress: values.emailAddress.trim(),
    organisationName: values.organisationName.trim(),
    submittedAt: new Date().toISOString()
  };

  if (
    !request.fullName ||
    !request.phoneNumber ||
    !request.emailAddress ||
    !request.organisationName
  ) {
    throw new Error("Please complete all required fields.");
  }

  localStorage.setItem(
    PILOT_STORAGE_KEY,
    JSON.stringify([...previous, request])
  );

  return request;
}
