import { basename, join } from "path";
import { existsSync } from "fs";
import { pathToFileURL } from "url";

const MOCKS_DIR = "./tests/__mocks__";

export function resolve(specifier, context, next) {
  const moduleName = basename(specifier);
  const moduleMockPath = join(MOCKS_DIR, moduleName);

  const hasMock = existsSync(moduleMockPath);
  if (hasMock) {
    const mockURL = pathToFileURL(moduleMockPath);
    return {
      url: mockURL.href,
    };
  }

  return next(specifier, context);
}
